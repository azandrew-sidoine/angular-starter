import { Component, Input, OnInit } from '@angular/core';

const COLORS = ['red', 'purple', '#000'];

@Component({
  selector: 'app-topbar',
  // vue du composant
  templateUrl: './topbar.component.html',
  // Feuille de style du composant
  styleUrls: ['./topbar.component.scss'],
  // standalone: true,
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class TopbarComponent implements OnInit {

  // Valeur passé par le composant parent au composant enfant
  @Input() title: string = 'Angular';
  @Input() backgroundColor = 'blue';
  @Input() color = '#fff';

  // Evénemenent de notification du composant parent
  // @Output() backgroundColorChange = new EventEmitter<string>();

  // clickCount = 0;

  ngOnInit(): void {
    
  }
}
