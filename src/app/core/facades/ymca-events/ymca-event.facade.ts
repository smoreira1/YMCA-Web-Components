import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import {
  map,
  distinctUntilChanged,
  switchMap,
  debounceTime,
  tap,
  catchError
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
  age: string;
  location: string;
  time: string;
  distance: string;
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
  eventsActionFilterOpened: boolean;
  searchTimeDuration: any;
  errored: boolean;
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
    zipCode: 32825,
    age: "18",
    location: 'Any',
    time: '12:00 AM-11:59 PM',
    distance: "5",
    gender: Gender.NONE,
    sortBy: null,
    startingTime: '12:00AM',
    endingTime: '11:59PM',
    tag: 'Teen Adult Stroke Technique',
  },
  loading: true,
  eventsActionFilterOpened: true,
  searchTimeDuration: null,
  errored: false
};

@Injectable()
export class YMCAEventFacade {
  private store = new BehaviorSubject<YMCAEventsState>(_state);
  private state$ = this.store.asObservable();

  public ymcaEvents$ = this.state$.pipe(map(state => state.ymcaEvents), distinctUntilChanged());
  public searchCriteria$ = this.state$.pipe(map(state => state.searchCriteria), distinctUntilChanged());
  public loading$ = this.state$.pipe(map(state => state.loading));
  public eventsActionFilterOpened$ = this.state$.pipe(map(state => state.eventsActionFilterOpened));
  public errored$ = this.state$.pipe(map(state => state.errored));
  public searchTimeDuration$ = this.state$.pipe(map(state => state.searchTimeDuration));

  // Viewmodel that resolves once all the data is ready (or updated)...
  public vm$: Observable<YMCAEventsState> = combineLatest([
    this.searchCriteria$,
    this.ymcaEvents$,
    this.loading$,
    this.eventsActionFilterOpened$,
    this.searchTimeDuration$,
    this.errored$]
  ).pipe(
    map(([searchCriteria, ymcaEvents, loading, eventsActionFilterOpened, searchTimeDuration, errored]) => {
      return {searchCriteria, ymcaEvents, loading, eventsActionFilterOpened, searchTimeDuration, errored };
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

  toggleDrawer() {
    const toggle = !_state.eventsActionFilterOpened;
    console.log(toggle);
    this.updateState({ ..._state, eventsActionFilterOpened: toggle});
  }


  setState(key, value) {
    console.log(`Set State: ${key} & ${value}`);
    const searchCriteria = {..._state.searchCriteria};
    searchCriteria[key] = value;
    console.log({ ..._state, searchCriteria });
    this.updateState({ ..._state, searchCriteria, 'loading': true });
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
    const startTime = new Date().getTime();
    const url = buildYmcaEventsUrl(searchCriteria);
    return this.http
      .get<any>(url)
      .pipe(
        tap(response => { this.getSearchTimeDuration(startTime ); }),
        map(
          response => { const data = JSON.parse(response); return data.data; }
        ),
        catchError(error => {
          this.updateState({..._state, 'loading': false, 'errored': true});
          return error;
        }),
      );
  }

  private getSearchTimeDuration(startTime: any) {
    const endTime = new Date().getTime() - startTime;
    this.updateState({..._state, searchTimeDuration: endTime });
  }

}

function buildYmcaEventsUrl(searchCriteria: SearchCriteria): string {
  const URL = 'https://build-ymcacf.cs17.force.com/services/apexrest/YmcaEvents';
  let searchFor = `tag=${searchCriteria.tag}&age=${searchCriteria.age}&zipcode=${searchCriteria.zipCode}&distance=${searchCriteria.distance}`;
  searchFor += `&startingTime=${searchCriteria.startingTime}&endingTime=${searchCriteria.endingTime}&geoFlag=false&lat=error&lon=error`;
  searchFor += `&monday=${searchCriteria.dayAvailability.Monday}&tuesday=${searchCriteria.dayAvailability.Tuesday}&wednesday=${searchCriteria.dayAvailability.Wednesday}`;
  searchFor += `&thursday=${searchCriteria.dayAvailability.Thursday}&friday=${searchCriteria.dayAvailability.Friday}&saturday=${searchCriteria.dayAvailability.Saturday}`;
  searchFor += `&sunday=${searchCriteria.dayAvailability.Sunday}&gender=${searchCriteria.gender}`;
  console.log('URL GET:');
  console.log(searchCriteria);
  return `${URL}?${searchFor}`;
}
