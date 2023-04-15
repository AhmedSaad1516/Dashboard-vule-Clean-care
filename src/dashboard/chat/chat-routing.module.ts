import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ShowChatComponent } from './show-chat/show-chat.component';

const routes: Routes = [
  {path:'',component:ChatComponent},
  {path:'showChat/:id',component:ShowChatComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
