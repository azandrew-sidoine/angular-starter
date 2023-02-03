import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './app-card-container.component.html',
  styles: [
    `
      .center {
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    `,
  ],
})
export class AppCardContainerComponent {
  @Input() orientation: string = 'center';
}
