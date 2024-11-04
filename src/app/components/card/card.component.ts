import { Component, Input } from '@angular/core';
import { CardTagComponent } from "./card-tag/card-tag.component";
import { CardDescriptionComponent } from "./card-description/card-description.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardTagComponent, CardDescriptionComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
	@Input()
	gameCover:string = ''
	@Input()
	cardTag:string = ''
	@Input()
	cardDescription:string = 'This is a Placeholder'
	@Input()
	cardPrice:string = 'R$XXX,XX'
	@Input()
	cardConsole:string = 'PSX'
}
