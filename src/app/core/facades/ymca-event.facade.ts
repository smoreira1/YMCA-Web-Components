import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import {
  map,
  distinctUntilChanged,
  switchMap,
  debounceTime
} from 'rxjs/operators';
import { YMCAEvent } from '@shared/interfaces/ymca-event.interface';
import { DayAvailability } from '@shared/interfaces/day-availability.interface';
import { Gender } from '@shared/enums/gender.enum';

export interface YMCAEventsResponse {
  results: YMCAEvent[];
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
}

export interface YMCAEventsState {
  ymcaEvents: YMCAEvent[];
  searchCriteria: SearchCriteria;
  loading: boolean;
}

let _state: YMCAEventsState = {
  ymcaEvents: [],
  searchCriteria: {
    dayAvailability: null,
    zipCode: null,
    age: null,
    location: null,
    time: null,
    distance: null,
    gender: null,
    sortBy: null,
    tag: null,
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
        this.updateState({ ..._state, ymcaEvents, loading: false });
      });
  }

  // ------- Public Methods ------------------------

  // Allows quick snapshot access to data for ngOnInit() purposes
  // getStateSnapshot(): YMCAEventsState {
  //   return { ..._state, pagination: { ..._state.pagination } };
  // }

  buildSearchTermControl(): FormControl {
    const searchTerm = new FormControl();
    searchTerm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(value => this.updateSearchsearchCriteria(value));
    return searchTerm;
  }

  updateSearchsearchCriteria(searchCriteria: SearchCriteria) {
    this.updateState({ ..._state, searchCriteria, loading: true });
  }

  // updatePagination(selectedSize: number, currentPage: number = 0) {
  //   const pagination = { ..._state.pagination, currentPage, selectedSize };
  //   this.updateState({ ..._state, pagination, loading: true });
  // }

  // ------- Private Methods ------------------------

  /** Update internal state cache and emit from store... */
  private updateState(state: YMCAEventsState) {
    this.store.next((_state = state));
  }

  /** RandomUser REST call */
  private findYMCAEvents(
    searchCriteria: SearchCriteria
  ): Observable<YMCAEvent[]> {
    const url = buildUserUrl(searchCriteria);
    return this.http
      .get<YMCAEventsResponse>(url)
      .pipe(map(response => response.results));
  }
}

function buildUserUrl(searchCriteria: SearchCriteria): string {
  const URL = 'https://randomuser.me/api/';
  const searchFor = `?tag=${searchCriteria.tag}&age=${searchCriteria.age}&zipcode=${searchCriteria.zipCode}&distance=${searchCriteria.distance}&startingTime=error&endingTime=error&geoFlag=error&lat=error&lon=error&monday=${searchCriteria.dayAvailability.Monday}&tuesday=${searchCriteria.dayAvailability.Tuesday}&wednesday=${searchCriteria.dayAvailability.Wednesday}&thursday=${searchCriteria.dayAvailability.Thursday}&friday=${searchCriteria.dayAvailability.Friday}&saturday=${searchCriteria.dayAvailability.Saturday}&sunday=${searchCriteria.dayAvailability.Sunday}&gender=${searchCriteria.gender}`;
  return `${URL}?${searchFor}`;
}
