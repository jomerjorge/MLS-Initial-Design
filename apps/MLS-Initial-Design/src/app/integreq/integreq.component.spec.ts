import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegreqComponent } from './integreq.component';

describe('IntegreqComponent', () => {
  let component: IntegreqComponent;
  let fixture: ComponentFixture<IntegreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
