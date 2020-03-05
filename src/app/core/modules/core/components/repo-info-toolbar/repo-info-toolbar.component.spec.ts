import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoInfoToolbarComponent } from './repo-info-toolbar.component';

describe('RepoInfoToolbarComponent', () => {
  let component: RepoInfoToolbarComponent;
  let fixture: ComponentFixture<RepoInfoToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoInfoToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoInfoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
