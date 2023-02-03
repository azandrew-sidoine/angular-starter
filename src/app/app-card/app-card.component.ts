import { Component, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './app-card.component.html',
    styleUrls: ['./app-card.scss']
})
export class AppCardComponent implements OnDestroy{

    @Input() title!: string;
    @Input() content!: string;
    @Input('button-label') btnLabel!: string;

    // // Component output / events
    // @Output() click = new EventEmitter<Event>();


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