import {Page} from 'ionic/ionic';
import {Sign} from '../sign/sign';
import {Dash} from '../dash/dash';
import {Chats} from '../chats/chats';
import {Account} from '../account/account';

@Page({
  templateUrl: 'app/tabs/tabs.html',
})

export class TabsPage {
  constructor() {
    this.SignRoot = Sign;
    this.DashRoot = Dash;
    this.ChatsRoot = Chats;
    this.AccountRoot = Account;
  }
}
