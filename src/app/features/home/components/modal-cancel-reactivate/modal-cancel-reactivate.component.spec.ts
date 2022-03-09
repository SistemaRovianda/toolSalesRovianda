import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelReactivateComponent } from './modal-cancel-reactivate.component';

describe('ModalCancelReactivateComponent', () => {
  let component: ModalCancelReactivateComponent;
  let fixture: ComponentFixture<ModalCancelReactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCancelReactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCancelReactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
