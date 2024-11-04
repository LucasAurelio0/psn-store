import { Component } from '@angular/core';
import { CardTagComponent } from "./card-tag/card-tag.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardTagComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
