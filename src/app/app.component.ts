import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

const COLORS = ['red', 'purple', '#000'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  title = 'Mon Application';
  backgroundColor = '#0c2831';
  // showCard = true;

  cardTitle = 'Todos';
  cardContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laboru numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!';

  constructor() {
    // setTimeout(() => {
    //   this.title = 'Mon Application - Mise à Jour';
    // }, 3000);
  }

  ngOnDestroy(): void {
    console.log('Destruction du composant...');
  }
  ngAfterViewChecked(): void {
    console.log('Après vérification de la vue du contenu du composant...');
  }

  ngAfterContentChecked(): void {
    console.log('Après vérification du contenu du composant...');
  }

  ngAfterContentInit(): void {
    console.log('Initialization du contenu du composant...');
  }

  ngAfterViewInit(): void {
    console.log('Initialization de la vue du composant...');
  }

  ngOnInit(): void {
    // alert('Création du composant...');
    console.log('Création du composant...');
    // setTimeout(() => {
    //   this.showCard = false;
    // }, 3000);
  }

  onBackgroundChange(color: string) {
    this.backgroundColor = color;
  }

  onCardClicked(event: Event) {
    this.backgroundColor = COLORS[Math.floor(Math.random() * (2 - 0) + 0)];
    event.preventDefault();
  }
}
