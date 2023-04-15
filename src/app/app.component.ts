import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { RoleServiceService } from 'src/dashboard/roles/service/role-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang:any
  constructor(private translate: TranslateService ,private serv:RoleServiceService) {

    if("lang" in localStorage){
      this.lang = localStorage.getItem('lang')
      translate.use(this.lang);
    }else{
      translate.use(this.translate.defaultLang);

    }

  }
  ngOnInit(): void {
    this.gerRoleLogin()
  }
  gerRoleLogin(){
    this.serv.getPermission().subscribe((data:any)=>{
this.serv.roleLogin.next(data)
this.serv.roleLogin1.next(data)
    })
  }
  title = 'Dashboard-valuecleainig';
}
