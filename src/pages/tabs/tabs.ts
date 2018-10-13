import { Component } from '@angular/core';

import { RidesPage } from '../rides/rides';
import { WalletPage } from '../wallet/wallet';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RidesPage;
  tab2Root = WalletPage;

  constructor() {

  }
}
