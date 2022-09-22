import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PorLugaresIncriveisPage } from './por-lugares-incriveis.page';

describe('PorLugaresIncriveisPage', () => {
  let component: PorLugaresIncriveisPage;
  let fixture: ComponentFixture<PorLugaresIncriveisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PorLugaresIncriveisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PorLugaresIncriveisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
