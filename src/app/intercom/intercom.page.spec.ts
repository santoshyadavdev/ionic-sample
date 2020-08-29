import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntercomPage } from './intercom.page';

describe('IntercomPage', () => {
  let component: IntercomPage;
  let fixture: ComponentFixture<IntercomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntercomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
