import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLibComponent } from './one-lib.component';

describe('OneLibComponent', () => {
  let component: OneLibComponent;
  let fixture: ComponentFixture<OneLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
