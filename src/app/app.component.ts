import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

const COLORS = ['red', 'purple', 'pink', 'black', 'green'];

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
  state = {
    clickCount: 0,
    titleClass: {} as Record<string, boolean>,
    titleStyle: {} as Record<string, string>,
    title: 'Mon Application',
    backgroundColor: '#0c2831',
    cardTitleClass: 'bottom-right',
    cardTitle: 'Todos',
    cardContent:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laboru numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!',
    index: undefined as any as number,
    users: [
      {
        name: 'John Doe',
        grade: 'A',
      },
      {
        name: 'Jack Mah',
        grade: 'A+',
      },
      {
        name: 'Roselyn',
        grade: 'A',
      },
      {
        name: 'Trevor',
        grade: 'D',
      },
    ],
  };

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
    // this.state.backgroundColor = color;
    this.setState({ backgroundColor: color });
    // this.setState((state) => ({...state, backgroundColor: color}));
  }

  onCardClicked(event: Event) {
    // window.alert('Hello World! I am clicked!');
    // const index = Math.floor(Math.random() * (COLORS.length - 0) + 0);
    // const color = COLORS[index];
    // this.setState({
    //   backgroundColor: color,
    //   titleClass: { [`title-${color}`]: true },
    //   titleStyle: { color },
    //   index,
    // });

    // this.setState((state) => ({
    //   ...state,
    //   backgroundColor: COLORS[Math.floor(Math.random() * (2 - 0) + 0)],
    //   titleClass: {...state.titleClass, backgroundHeader: !state.titleClass.backgroundHeader}
    // }));
    // this.backgroundColor = COLORS[Math.floor(Math.random() * (2 - 0) + 0)];
    event.preventDefault();
  }

  onTitleChange(title: string) {
      this.setState({...this.state, title: title})
  }

  incrementClickCount(event?: Event) {
    this.setState((state) => ({ ...state, clickCount: state.clickCount + 1 }));
    event?.preventDefault();
  }

  setState(
    state:
      | Partial<typeof this.state>
      | ((state: typeof this.state) => typeof this.state)
  ) {
    // a ne jamais faire en angular
    // this.state.backgroundColor = state.backgroundColor;
    // Faites plutôt ceci : Qui est une syntax qui modifie la référence de l'objet state
    this.state =
      typeof state === 'function'
        ? state(this.state)
        : { ...this.state, ...state }; // déréférencement d'objet
    // const myobj = {name: 'John', age: 23} -> const {name, age} =  {...myobj};
    // const myarr = [1,2,3,4]  -> const [a,b,c,d] = [...myarr];
  }
}
