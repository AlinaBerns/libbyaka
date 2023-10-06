import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsers2Component } from './admin.users2.component';

describe('AdminUsers2Component', () => {
  let component: AdminUsers2Component;
  let fixture: ComponentFixture<AdminUsers2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsers2Component]
    });
    fixture = TestBed.createComponent(AdminUsers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
