import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListTemplatePage } from './list-template.page';

describe('ListTemplatePage', () => {
  let component: ListTemplatePage;
  let fixture: ComponentFixture<ListTemplatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTemplatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListTemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
