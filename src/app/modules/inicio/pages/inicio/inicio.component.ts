import { Component } from '@angular/core';

interface Review {
  name: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  reviews: Review[] = [];
  review: Review = { name: '', text: '', rating: 5 };

  onSubmit() {
    if (this.review.name && this.review.text) {
      this.reviews.push({ ...this.review });
      this.review = { name: '', text: '', rating: 5 };
    }
  }
}