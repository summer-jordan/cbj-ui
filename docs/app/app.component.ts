import {Component, OnDestroy, OnInit} from '@angular/core';
import { SidebarLinkTypes, LayoutConfig } from '@codebyjordan/ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit, OnDestroy {
  layoutConfig: LayoutConfig = {
    useSidebar: true,
    navbarClasses: 'navbar-dark bg-primary',
    mainScrollbarOptions: {
      isRoot: true,
      alwaysVisible: true,
      barBackground: '#004FFF',
      gridBackground: '#14213D',
    },
    sidebarLinks: [
      { link: '/home', text: 'Home', type: SidebarLinkTypes.LINK },
      { link: '/getting-started', text: 'Getting Started', type: SidebarLinkTypes.LINK },

      { text: 'Modules', type: SidebarLinkTypes.HEADING },
      { text: 'Datatable', type: SidebarLinkTypes.DROPDOWN, dropdownShow: false, children: [
          { link: '/datatable/component', text: 'Datatable Component', type: SidebarLinkTypes.LINK},
        ]
      },
      { text: 'Layout', type: SidebarLinkTypes.DROPDOWN, dropdownShow: false, children: [
          { link: '/layout/component', text: 'Layout Component', type: SidebarLinkTypes.LINK},
        ]
      },
      { text: 'Menu', type: SidebarLinkTypes.DROPDOWN, dropdownShow: false, children: [
          { link: '/menu/component', text: 'Menu Component', type: SidebarLinkTypes.LINK},
        ]
      },
      { text: 'Navs', type: SidebarLinkTypes.DROPDOWN, dropdownShow: false, children: [
          { link: '/cards/card-tabs', text: 'Card Tabs', type: SidebarLinkTypes.LINK},
        ]
      },
      { text: 'Pipes', type: SidebarLinkTypes.DROPDOWN, dropdownShow: false, children: [
          { link: '/pipes/bytes-transform', text: 'Bytes Transform', type: SidebarLinkTypes.LINK},
        ]
      },
      { text: 'Ripple', type: SidebarLinkTypes.DROPDOWN, dropdownShow: false, children: [
          { link: '/ripple/directive', text: 'Ripple Directive', type: SidebarLinkTypes.LINK},
        ]
      },
      { text: 'Scroll', type: SidebarLinkTypes.DROPDOWN, dropdownShow: false, children: [
          { link: '/scroll/el-in-view', text: 'Element InView', type: SidebarLinkTypes.LINK},
          { link: '/scroll/anim-in-view', text: 'Animate InView', type: SidebarLinkTypes.LINK},
        ]
      },
      { text: 'Services', type: SidebarLinkTypes.HEADING },
      { link: '/services/scroll-service', text: 'Scroll Service', type: SidebarLinkTypes.LINK},
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
