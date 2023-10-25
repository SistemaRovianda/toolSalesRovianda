import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChangeClientComponent } from './modal-change-client.component';

describe('ModalChangeClientComponent', () => {
  let component: ModalChangeClientComponent;
  let fixture: ComponentFixture<ModalChangeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalChangeClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChangeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
