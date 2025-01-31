import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoteFormComponent} from './note-form.component';
import {Note} from '../../model/Note';

describe('NoteFormComponent', () => {
  let component: NoteFormComponent;
  let fixture: ComponentFixture<NoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit note - invalid user fiscal code', () => {
    spyOn(window, 'alert');
    component.onSubmitNote('Test', 'Test', '');
    expect(window.alert).toHaveBeenCalledWith('Inserisci un valido commento');
  });

  it('should submit note - invalid title note', () => {
    spyOn(window, 'alert');
    component.onSubmitNote('', 'Test', '');
    expect(window.alert).toHaveBeenCalledWith('Inserisci un valido commento');
  });

  it('should submit note - invalid body note', () => {
    spyOn(window, 'alert');
    component.onSubmitNote('Test', '', '');
    expect(window.alert).toHaveBeenCalledWith('Inserisci un valido commento');
  });

  it('should submit note - valid new note', () => {
    spyOn(component.addNewNote, 'emit');

    component.onSubmitNote('Test', 'Test', 'CNADRN86L68E506Z');
    fixture.detectChanges();

    expect(component.addNewNote.emit).toHaveBeenCalledWith(new Note('CNADRN86L68E506Z', null, 'Test', 'Test'));
  });

  it('should submit note - valid new note', () => {
    spyOn(component.editExistantNote, 'emit');

    component.currentCommento = new Note('CNADRN86L68E506Z', 10, 'Test', 'Test');
    component.canEditCommento = true;
    component.onSubmitNote('Test2', 'Test2', 'CNADRN86L68E506Z');
    fixture.detectChanges();
    
    expect(component.editExistantNote.emit).toHaveBeenCalledWith(new Note('CNADRN86L68E506Z', 10, 'Test2', 'Test2'));
  });
});
