import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalShowSaleComponent } from './modal-show-sale.component';

describe('ModalShowSaleComponent', () => {
  let component: ModalShowSaleComponent;
  let fixture: ComponentFixture<ModalShowSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalShowSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalShowSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
