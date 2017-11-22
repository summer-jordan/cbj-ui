import {AfterContentInit, Component, ContentChildren, HostListener, Input, QueryList} from '@angular/core';
import {CbjMenuItemDirective} from './menu-item.directive';
import {toggleMenu} from '../animations/menu';

@Component({
  selector: 'cbj-menu',
  templateUrl: './menu.component.html',
  animations: [ toggleMenu() ]
})
export class CbjMenuComponent implements AfterContentInit {
  @Input('arrow')arrow: boolean;
  @Input('title')title: string | boolean;
  @ContentChildren(CbjMenuItemDirective) items: QueryList<CbjMenuItemDirective>;
  toggleClasses: {};
  toggleTitle: string;
  menuState = 'closed';

  @HostListener('click')
  onClick() {
    this.menuState = this.menuState === 'open' ? 'closed' : 'open';
  }

  @HostListener('focusout')
  onFocusOut() {
    this.menuState = 'closed';
  }

  constructor() { }

  ngAfterContentInit() {
    if (typeof this.title === 'string') {
      this.toggleTitle = this.title;
    }else {
      this.items.toArray().forEach((item, index) => {
        item.active = false;
        if (index === 0) {
          item.active = true;
          this.toggleTitle = item.label;
        }
      });
    }
  }
}
