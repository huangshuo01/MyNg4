import { TenantType } from "./TenantType";


export class Tenant {
    name:string
    active:boolean
    domainId:String
    hubDomainId:String
    tenantType:TenantType
    sites:any
}