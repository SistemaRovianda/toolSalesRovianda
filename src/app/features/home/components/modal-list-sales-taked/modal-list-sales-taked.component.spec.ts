import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListSalesTakedComponent } from './modal-list-sales-taked.component';

describe('ModalListSalesTakedComponent', () => {
  let component: ModalListSalesTakedComponent;
  let fixture: ComponentFixture<ModalListSalesTakedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListSalesTakedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListSalesTakedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
