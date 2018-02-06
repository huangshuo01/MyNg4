import { Tenant } from '../entitys/Tenant';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Tenants } from '../mocks/Tenant.mock';

@Injectable()
export class TenantService {
    tenants:Tenant[];
    constructor(private http: Http) {

    }
    getTenantById():Promise<Tenant[]>{
        return Promise.resolve(Tenants);
    }
}