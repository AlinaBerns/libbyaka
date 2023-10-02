import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOutletComponent } from './modal-outlet.component';

describe('ModalOutletComponent', () => {
  let component: ModalOutletComponent;
  let fixture: ComponentFixture<ModalOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalOutletComponent]
    });
    fixture = TestBed.createComponent(ModalOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
