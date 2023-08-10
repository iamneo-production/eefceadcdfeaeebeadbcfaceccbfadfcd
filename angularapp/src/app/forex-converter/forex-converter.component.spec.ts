import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForexConverterComponent } from './forex-converter.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

describe('ForexConverterComponent', () => {
  let component: ForexConverterComponent;
  let fixture: ComponentFixture<ForexConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForexConverterComponent],
      imports: [FormsModule], // Add FormsModule here
    });
    fixture = TestBed.createComponent(ForexConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
