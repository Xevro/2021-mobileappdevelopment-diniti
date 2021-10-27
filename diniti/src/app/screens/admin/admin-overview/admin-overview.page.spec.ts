import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AdminOverviewPage} from './admin-overview.page';

describe('AdminOverviewPage', () => {
  let component: AdminOverviewPage;
  let fixture: ComponentFixture<AdminOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOverviewPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
