import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IcellFormControlsComponent } from './icell-form-controls.component';

describe('IcellFormControlsComponent', () => {
  let component: IcellFormControlsComponent;
  let fixture: ComponentFixture<IcellFormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcellFormControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IcellFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
