import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListDadosPage } from './list-dados.page';

describe('ListDadosPage', () => {
  let component: ListDadosPage;
  let fixture: ComponentFixture<ListDadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
