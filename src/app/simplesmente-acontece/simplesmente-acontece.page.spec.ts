import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimplesmenteAcontecePage } from './simplesmente-acontece.page';

describe('SimplesmenteAcontecePage', () => {
  let component: SimplesmenteAcontecePage;
  let fixture: ComponentFixture<SimplesmenteAcontecePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplesmenteAcontecePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimplesmenteAcontecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
