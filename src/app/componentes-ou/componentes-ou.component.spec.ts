import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesOUComponent } from './componentes-ou.component';

describe('ComponentesOUComponent', () => {
  let component: ComponentesOUComponent;
  let fixture: ComponentFixture<ComponentesOUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesOUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesOUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
