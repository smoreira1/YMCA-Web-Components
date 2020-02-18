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
import { YMCAEvent } from '../interfaces/ymca-event.interface';

export interface Pagination {
  selectedSize: number;
  currentPage: number;
  pageSizes: number[];
}

export interface YMCAEventsResponse {
  results: YMCAEvent[];
}

export interface YMCAEventState {
  ymcaEvents: YMCAEvent[];
  pagination: Pagination;
  searchCriteria: string;
  loading: boolean;
}

let _state: YMCAEventState = {
  ymcaEvents: [],
  searchCriteria: 'ngDominican',
  pagination: {
    currentPage: 0,
    selectedSize: 5,
    pageSizes: [5, 10, 20, 50]
  },
  loading: false
};

@Injectable()
export class UserFacade {
  private store = new BehaviorSubject<YMCAEventState>(_state);
  private state$ = this.store.asObservable();

  ymcaEvents$ = this.state$.pipe(
    map(state => state.ymcaEvents),
    distinctUntilChanged()
  );
  searchCriteria$ = this.state$.pipe(
    map(state => state.searchCriteria),
    distinctUntilChanged()
  );
  pagination$ = this.state$.pipe(
    map(state => state.pagination),
    distinctUntilChanged()
  );
  loading$ = this.state$.pipe(map(state => state.loading));

  /**
   * Viewmodel that resolves once all the data is ready (or updated)...
   */
  vm$: Observable<YMCAEventState> = combineLatest(
    this.pagination$,
    this.searchCriteria$,
    this.ymcaEvents$,
    this.loading$
  ).pipe(
    map(([pagination, searchCriteria, ymcaEvents, loading]) => {
      return { pagination, searchCriteria, ymcaEvents, loading };
    })
  );

  /**
   * Watch 2 streams to trigger user loads and state updates
   */
  constructor(private http: HttpClient) {
    combineLatest(this.searchCriteria$, this.pagination$)
      .pipe(
        switchMap(([searchCriteria, pagination]) => {
          return this.findAllymcaEvents(searchCriteria, pagination);
        })
      )
      .subscribe(ymcaEvents => {
        this.updateState({ ..._state, ymcaEvents, loading: false });
      });
  }

  // ------- Public Methods ------------------------

  // Allows quick snapshot access to data for ngOnInit() purposes
  getStateSnapshot(): YMCAEventState {
    return { ..._state, pagination: { ..._state.pagination } };
  }

  buildSearchTermControl(): FormControl {
    const searchTerm = new FormControl();
    searchTerm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(value => this.updateSearchsearchCriteria(value));

    return searchTerm;
  }

  updateSearchsearchCriteria(searchCriteria: string) {
    this.updateState({ ..._state, searchCriteria, loading: true });
  }

  updatePagination(selectedSize: number, currentPage: number = 0) {
    const pagination = { ..._state.pagination, currentPage, selectedSize };
    this.updateState({ ..._state, pagination, loading: true });
  }

  // ------- Private Methods ------------------------

  /** Update internal state cache and emit from store... */
  private updateState(state: YMCAEventState) {
    this.store.next((_state = state));
  }

  /** RandomUser REST call */
  private findAllymcaEvents(
    searchCriteria: string,
    pagination: Pagination
  ): Observable<YMCAEvent[]> {
    const url = buildUserUrl(searchCriteria, pagination);
    return this.http
      .get<YMCAEventsResponse>(url)
      .pipe(map(response => response.results));
  }
}

function buildUserUrl(searchCriteria: string, pagination: Pagination): string {
  const URL = 'https://randomuser.me/api/';
  const currentPage = `page=${pagination.currentPage}`;
  const pageSize = `results=${pagination.selectedSize}&`;
  const searchFor = `seed=${searchCriteria}`;

  return `${URL}?${searchFor}&${pageSize}&${currentPage}`;
}
