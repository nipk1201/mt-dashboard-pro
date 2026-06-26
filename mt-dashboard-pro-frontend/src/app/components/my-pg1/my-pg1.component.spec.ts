import {ComponentFixture, TestBed} from '@angular/core/testing';
import {my-pg1Component} from "./my-pg1.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('MyPg1Component', () => {
  let fixture: ComponentFixture<MyPg1Component>;
  let component: MyPg1Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPg1Component],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader, useValue: {
            getTranslation(): Observable<Record<string, string>> {
              return of({});
            }
          }
        }
      })],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPg1Component);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
