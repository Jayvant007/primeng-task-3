import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianDetaliComponent } from './accordian-detali.component';

describe('AccordianDetaliComponent', () => {
  let component: AccordianDetaliComponent;
  let fixture: ComponentFixture<AccordianDetaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianDetaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianDetaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
