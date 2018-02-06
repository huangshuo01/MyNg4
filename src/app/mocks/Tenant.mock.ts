import { Tenant } from "../entitys/Tenant";
import { TenantType } from "../entitys/TenantType";

export const tenantType:TenantType = {
    code: "123",
    name: "test",
    disabled:false
};
export const Tenants: Tenant[] = [
    {
        name:'leo',
        active:true,
        domainId:'TBY',
        hubDomainId:'TBY',
        tenantType:tenantType,
        sites:'leo'
    },
    {
        name:'leo',
        active:true,
        domainId:'TBY',
        hubDomainId:'TBY',
        tenantType:tenantType,
        sites:'leo'
    }
];