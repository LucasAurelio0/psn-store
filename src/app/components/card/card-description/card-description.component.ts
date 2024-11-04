import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-description',
  standalone: true,
  imports: [],
  templateUrl: './card-description.component.html',
  styleUrl: './card-description.component.css'
})
export class CardDescriptionComponent {
	@Input()
	cardDescription:string = 'This is a Placeholder'
	@Input()
	cardPrice:string = 'R$XXX,XX'
	@Input()
	cardConsole:string = 'PSX'
}
