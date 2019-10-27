import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeXComponent } from './theme-x.component';

describe('ThemeXComponent', () => {
  let component: ThemeXComponent;
  let fixture: ComponentFixture<ThemeXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
