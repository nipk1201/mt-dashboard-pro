import {ComponentFixture, TestBed} from '@angular/core/testing';
import { MachineTendingComponent} from "./MachineTending.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('MachineTendingComponent', () => {
  let fixture: ComponentFixture<MachineTendingComponent>;
  let component: MachineTendingComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineTendingComponent],
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

    fixture = TestBed.createComponent(MachineTendingComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
