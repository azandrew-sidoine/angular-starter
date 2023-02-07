import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-card-title',
  templateUrl: './app-card-title.component.html',
  styleUrls: ['./app-card-title.component.scss']
})
export class AppCardTitleComponent {
  @Input() text!: string;
}
