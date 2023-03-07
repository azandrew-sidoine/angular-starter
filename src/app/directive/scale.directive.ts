import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit
} from '@angular/core';

function getScaleProperty(orientation: string, scale: number) {
  switch (orientation) {
    case 'y':
      return `scaleY(${scale})`;
    case 'x':
      return `scaleX(${scale})`;
    default:
      return `scale(${scale})`;
  }
}

@Directive({
  selector: '[scale]', // [nomDirective]
})
export class ScaleDirective implements OnInit {
  // #region
  @Input('size') scale: number = 1.2;
  @Input() orientation: 'y' | 'x' | 'b' = 'b';
  // #endregion

  @HostListener('mouseenter')
  mouseOverListener(event: Event) {
    /**
     * .el:hover {
     *    transform: scale(3)
     * }
     */
    this.el.nativeElement.style.transform = getScaleProperty(
      this.orientation,
      this.scale
    );
  }

  @HostListener('mouseleave')
  mouseOutListener(event: Event) {
    this.el.nativeElement.style.transform = `scale(1)`;
  }

  /**
   * Creates directive instance
   *
   */
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (this.el.nativeElement) {
      this.el.nativeElement.style.transition = 'transform 200ms ease-in';
    }
  }
}
