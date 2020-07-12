import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratequizComponent } from './generatequiz.component';

describe('GeneratequizComponent', () => {
  let component: GeneratequizComponent;
  let fixture: ComponentFixture<GeneratequizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratequizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
