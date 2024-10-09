import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioComponent],
      imports: [FormsModule] // Asegúrate de importar FormsModule
    });
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a review', () => {
    component.review = { name: 'Test User', text: 'Great phone!', rating: 5 };
    component.onSubmit();
    expect(component.reviews.length).toBe(1);
    expect(component.reviews[0].name).toBe('Test User');
  });
});