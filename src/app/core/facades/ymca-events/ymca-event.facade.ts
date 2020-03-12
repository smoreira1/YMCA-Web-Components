import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import {
  map,
  distinctUntilChanged,
  switchMap,
  debounceTime,
  tap
} from 'rxjs/operators';
import { YMCAEvent } from '@shared/interfaces/ymca-event.interface';
import { DayAvailability } from '@shared/interfaces/day-availability.interface';
import { Gender } from '@shared/enums/gender.enum';

export interface YMCAEventsResponse {
  data: YMCAEvent[];
  messages: string[];
  success: boolean;
}

export interface SearchCriteria {
  dayAvailability: DayAvailability;
  zipCode: number;
  age: number;
  location: string;
  time: string;
  distance: number;
  gender: Gender;
  sortBy: string;
  tag: string;
  startingTime: string;
  endingTime: string;
}

export interface YMCAEventsState {
  ymcaEvents: YMCAEvent[];
  searchCriteria: SearchCriteria;
  loading: boolean;
}

let _state: YMCAEventsState = {
  ymcaEvents: [],
  searchCriteria: {
    dayAvailability: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    },
    zipCode: null,
    age: 99,
    location: null,
    time: null,
    distance: 50,
    gender: Gender.NONE,
    sortBy: null,
    startingTime: '12:00AM',
    endingTime: '11:59PM',
    tag: 'Teen Adult Stroke Technique',
  },
  loading: false
};

@Injectable()
export class YMCAEventFacade {
  private store = new BehaviorSubject<YMCAEventsState>(_state);
  private state$ = this.store.asObservable();

  public ymcaEvents$ = this.state$.pipe(map(state => state.ymcaEvents), distinctUntilChanged());
  public searchCriteria$ = this.state$.pipe(map(state => state.searchCriteria), distinctUntilChanged());
  public loading$ = this.state$.pipe(map(state => state.loading));
  // Viewmodel that resolves once all the data is ready (or updated)...
  public vm$: Observable<YMCAEventsState> = combineLatest([
    this.searchCriteria$,
    this.ymcaEvents$,
    this.loading$]
  ).pipe(
    map(([searchCriteria, ymcaEvents, loading]) => {
      return {searchCriteria, ymcaEvents, loading };
    })
  );
  // Watch 2 streams to trigger user loads and state updates
  constructor(private http: HttpClient) {
    combineLatest([this.searchCriteria$])
      .pipe(
        switchMap(([searchCriteria]) => {
          return this.findYMCAEvents(searchCriteria);
        })
      )
      .subscribe(ymcaEvents => {
        console.log('state updated');
        console.log(ymcaEvents);
        this.updateState({ ..._state, ymcaEvents, loading: false });
      });
  }

  // ------- Public Methods ------------------------

  // Allows quick snapshot access to data for ngOnInit() purposes
  getStateSnapshot(): YMCAEventsState {
    return { ..._state };
  }

  buildSearchTermControl(): Observable<SearchCriteria> {
    const searchTerm = new Observable<any>();
    searchTerm
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(value => this.updateFilterCriteria(value));
    return searchTerm;
  }

  updateFilterCriteria(searchCriteria: SearchCriteria) {
    this.updateState({ ..._state, searchCriteria, loading: true });
  }

  // ------- Private Methods ------------------------

  /** Update internal state cache and emit from store... */
  private updateState(state: YMCAEventsState) {
    this.store.next((_state = state));
  }

  /** RandomUser REST call */
  private findYMCAEvents(
    searchCriteria: SearchCriteria
  ): Observable<YMCAEvent[]> {
    const url = buildYmcaEventsUrl(searchCriteria);
    return this.http
      .get<YMCAEventsResponse>(url)
      .pipe(
        tap(response => console.log(response)),
        map(response => response.data)
      );
  }
}

function buildYmcaEventsUrl(searchCriteria: SearchCriteria): string {
  const URL = 'https://build-ymcacf.cs17.force.com/services/apexrest/YmcaEvents';
  const searchFor = `tag=${searchCriteria.tag}&age=${searchCriteria.age}&zipcode=${searchCriteria.zipCode}&distance=${searchCriteria.distance}&startingTime=${searchCriteria.startingTime}&endingTime=${searchCriteria.endingTime}&geoFlag=false&lat=error&lon=error&monday=${searchCriteria.dayAvailability.Monday}&tuesday=${searchCriteria.dayAvailability.Tuesday}&wednesday=${searchCriteria.dayAvailability.Wednesday}&thursday=${searchCriteria.dayAvailability.Thursday}&friday=${searchCriteria.dayAvailability.Friday}&saturday=${searchCriteria.dayAvailability.Saturday}&sunday=${searchCriteria.dayAvailability.Sunday}&gender=${searchCriteria.gender}`;
  console.log(searchFor);
  return `${URL}?${searchFor}`;
}
