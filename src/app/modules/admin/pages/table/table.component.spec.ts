import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tableComponent } from './table.component';

describe('TableComponent', () => {
  let component: tableComponent;
  let fixture: ComponentFixture<tableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [tableComponent]
    });
    fixture = TestBed.createComponent(tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});