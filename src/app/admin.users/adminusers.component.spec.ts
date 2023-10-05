import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersComponent } from './adminusers.component';

describe('AdminUserComponent', () => {
  let component: AdminUsersComponent;
  let fixture: ComponentFixture<AdminUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersComponent]
    });
    fixture = TestBed.createComponent(AdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
