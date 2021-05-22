import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmRemoveComponent } from './modal-confirm-remove.component';

describe('ModalConfirmRemoveComponent', () => {
  let component: ModalConfirmRemoveComponent;
  let fixture: ComponentFixture<ModalConfirmRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
