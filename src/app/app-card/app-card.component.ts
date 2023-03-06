import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output
} from '@angular/core';

const TITLES = ['Mon Application', 'Liksoft', 'Angular', 'React', 'VueJS'];

@Component({
  // Le nom de la balise HTML réprésentant votre composant web
  selector: 'app-card',

  // Lien URL vers la vue du composant web
  templateUrl: './app-card.component.html',

  // Vue en ligne de votre composant web
  // template: `
  //   <p>

  //   </p>
  // `,
  styleUrls: ['./app-card.scss'],
  // styles: [
  //   ``,
  //   ``
  // ]
})
export class AppCardComponent implements OnDestroy {
  @Input() title!: string;
  @Input() content!: string;
  @Input('button-label') btnLabel!: string;

  @HostListener('click')
  onClick() {
    this.click.emit();
    const index = Math.floor(Math.random() * (TITLES.length - 0) + 0);
    this.titleChange.emit(TITLES[index]);
  }

  // // Component output / events
  @Output() click = new EventEmitter<Event>();

  @Output() titleChange = new EventEmitter<string>();

  // Listener for click
  // onCardButtonClicked(event: Event) {
  //     this.click.emit(event);

  //     // Prévenir l'action par défault qui est la navigation vers le lien
  //     // de la balise <a> quand ce dernier est cliqué
  //     event.preventDefault();
  // }

  ngOnDestroy(): void {
    console.log('Destruction du composant carte!');
  }
}
