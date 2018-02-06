import { Tenant } from './entitys/Tenant';
import { TenantService } from './services/tenant.service';
import { Component } from '@angular/core';
import { Tenants } from './mocks/Tenant.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first angular app!';
  tenants2:Tenant[];
  name:string='test';
  constructor(private tenantService:TenantService){
    
  }

  getTenant(){
    this.tenantService.getTenantById().then(
      tenants => {
        this.tenants2 = tenants;
        console.log('tenants2'+this.tenants2[0].name);
      }
    ).catch(
      
    );
  }
}
