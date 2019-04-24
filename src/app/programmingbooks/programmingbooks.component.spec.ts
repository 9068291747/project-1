import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingbooksComponent } from './programmingbooks.component';

describe('ProgrammingbooksComponent', () => {
  let component: ProgrammingbooksComponent;
  let fixture: ComponentFixture<ProgrammingbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
