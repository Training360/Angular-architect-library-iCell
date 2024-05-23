import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountrySelectorComponent } from './country-selector.component';

describe('CountrySelectorComponent', () => {
  let component: CountrySelectorComponent;
  let fixture: ComponentFixture<CountrySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountrySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('five buttons should exist', () => {
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button.border.p-2');
    expect(buttons.length).toEqual( component.countries.length );
  });

});
