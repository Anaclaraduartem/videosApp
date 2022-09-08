import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ACincoPassosDeVocePage } from './a-cinco-passos-de-voce.page';

describe('ACincoPassosDeVocePage', () => {
  let component: ACincoPassosDeVocePage;
  let fixture: ComponentFixture<ACincoPassosDeVocePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ACincoPassosDeVocePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ACincoPassosDeVocePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
