import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesEMComponent } from './componentes-em.component';

describe('ComponentesEMComponent', () => {
  let component: ComponentesEMComponent;
  let fixture: ComponentFixture<ComponentesEMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesEMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesEMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
