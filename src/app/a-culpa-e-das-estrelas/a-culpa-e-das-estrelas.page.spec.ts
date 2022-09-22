import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ACulpaEDasEstrelasPage } from './a-culpa-e-das-estrelas.page';

describe('ACulpaEDasEstrelasPage', () => {
  let component: ACulpaEDasEstrelasPage;
  let fixture: ComponentFixture<ACulpaEDasEstrelasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ACulpaEDasEstrelasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ACulpaEDasEstrelasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
