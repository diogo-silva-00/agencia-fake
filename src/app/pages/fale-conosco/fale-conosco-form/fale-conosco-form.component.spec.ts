import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaleConoscoFormComponent } from './fale-conosco-form.component';

describe('FaleConoscoFormComponent', () => {
  let component: FaleConoscoFormComponent;
  let fixture: ComponentFixture<FaleConoscoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaleConoscoFormComponent]
    });
    fixture = TestBed.createComponent(FaleConoscoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
