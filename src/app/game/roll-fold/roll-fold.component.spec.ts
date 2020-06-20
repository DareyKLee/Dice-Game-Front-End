import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollFoldComponent } from './roll-fold.component';

describe('RollFoldComponent', () => {
  let component: RollFoldComponent;
  let fixture: ComponentFixture<RollFoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollFoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
