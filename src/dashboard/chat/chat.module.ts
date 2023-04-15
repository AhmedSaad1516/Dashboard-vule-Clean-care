import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ShowChatComponent } from './show-chat/show-chat.component';

@NgModule({
  declarations: [
    ChatComponent,
    ShowChatComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
