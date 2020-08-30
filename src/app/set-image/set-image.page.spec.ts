import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetImagePage } from './set-image.page';

describe('SetImagePage', () => {
  let component: SetImagePage;
  let fixture: ComponentFixture<SetImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
