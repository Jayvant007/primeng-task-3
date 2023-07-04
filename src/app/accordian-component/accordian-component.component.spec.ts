import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianComponentComponent } from './accordian-component.component';


describe('AccordianComponentComponent', () => {
  let component: AccordianComponentComponent;
  let fixture: ComponentFixture<AccordianComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
