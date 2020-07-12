import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcategoryComponent } from './clientcategory.component';

describe('ClientcategoryComponent', () => {
  let component: ClientcategoryComponent;
  let fixture: ComponentFixture<ClientcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
