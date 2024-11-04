import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tag',
  standalone: true,
  imports: [],
  templateUrl: './card-tag.component.html',
  styleUrl: './card-tag.component.css'
})
export class CardTagComponent {

	@Input()
	cardTag:string = ''

}
