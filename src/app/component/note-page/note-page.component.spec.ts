import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideHttpClient} from '@angular/common/http';

import {NotePageComponent} from './note-page.component';

describe('NotePageComponent', () => {
  let component: NotePageComponent;
  let fixture: ComponentFixture<NotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotePageComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
