import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooksComponent } from './adminbooks.component';

describe('AdminBooksComponent', () => {
  let component: AdminBooksComponent;
  let fixture: ComponentFixture<AdminBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBooksComponent]
    });
    fixture = TestBed.createComponent(AdminBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
