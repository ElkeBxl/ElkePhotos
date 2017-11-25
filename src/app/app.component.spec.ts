import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PHOTO_SERVICE_TOKEN } from './photo.service.token';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            AppModule
        ],
      providers: [
        { provide: PHOTO_SERVICE_TOKEN, useValue: {} } 
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
