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
  constructor(private tenantService:TenantService){
    this.getTenant();
  }
  getTenant():Tenant[]{
    let tenants;
    this.tenantService.getTenantById().then(tenants => {tenants = tenants;this.tenants2 = tenants;});
    return tenants;
  }
}
