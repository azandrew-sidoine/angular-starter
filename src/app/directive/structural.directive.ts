import {
    Directive,
    EventEmitter,
    HostListener,
    Input,
    Output,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

// type SetStateParamType<T> = ((state: T) => T) | Partial<T>;

// type StateType = {
//   clickCount: number;
// };

@Directive({
  selector: '[showIfClickEven]',
})
export class ShowIfClickedEvenDirective {
  // #region Directive internal state
  @Input() set showIfClickEven(count: number) {
    this.updateUI(count);
  }
  // #endregion Directive inteernal state

  @Output('click') onClick = new EventEmitter<void>;

  @HostListener('click')
  onElementClicked() {
    this.onClick.emit();
  }

  /**
   *  Creates directive instance
   */
  constructor(
    private viewRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  private updateUI(count: number) {
    if (count % 2 === 0) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }

  //   setState(state: SetStateParamType<StateType>) {
  //     this._state =
  //       typeof state === 'function'
  //         ? state(this._state)
  //         : { ...this._state, ...state };
  //   }
}
