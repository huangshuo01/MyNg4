import { HttpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TenantService } from './services/tenant.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        HttpModule
      ],
      providers:[
        TenantService
      ]
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  it('get tenant is not null', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;
    let tenants = comp.getTenant();
    expect(!tenants).toBe(false);
  }));
});
