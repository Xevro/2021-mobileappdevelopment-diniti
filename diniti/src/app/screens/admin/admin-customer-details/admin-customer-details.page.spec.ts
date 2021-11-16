import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AdminCustomerDetailsPage} from './admin-customer-details.page';

describe('AdminCustomerDetailsPage', () => {
  let component: AdminCustomerDetailsPage;
  let fixture: ComponentFixture<AdminCustomerDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCustomerDetailsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCustomerDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
