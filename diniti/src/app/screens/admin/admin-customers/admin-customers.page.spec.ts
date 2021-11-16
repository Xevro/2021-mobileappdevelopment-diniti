import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AdminCustomersPage} from './admin-customers.page';

describe('AdminCustomersPage', () => {
  let component: AdminCustomersPage;
  let fixture: ComponentFixture<AdminCustomersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCustomersPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
