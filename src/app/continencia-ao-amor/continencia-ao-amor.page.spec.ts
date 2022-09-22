import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContinenciaAoAmorPage } from './continencia-ao-amor.page';

describe('ContinenciaAoAmorPage', () => {
  let component: ContinenciaAoAmorPage;
  let fixture: ComponentFixture<ContinenciaAoAmorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinenciaAoAmorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContinenciaAoAmorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
