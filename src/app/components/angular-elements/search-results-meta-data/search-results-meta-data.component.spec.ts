import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsMetaDataComponent } from './search-results-meta-data.component';

describe('SearchResultsMetaDataComponent', () => {
  let component: SearchResultsMetaDataComponent;
  let fixture: ComponentFixture<SearchResultsMetaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsMetaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
