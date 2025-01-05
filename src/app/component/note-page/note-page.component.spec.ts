import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {NotePageComponent} from './note-page.component';
import {Note} from '../../model/Note';
import {NoteService} from '../../service/note.service';
import {UserService} from '../../service/user.service';

describe('NotePageComponent', () => {
  let component: NotePageComponent;
  let fixture: ComponentFixture<NotePageComponent>;

  let mockNoteService: any;
  const mockNewNote: Note = new Note(null, null, 'Test', 'Test');
  const mockEditedNote: Note = new Note('CNADRN86L68E506Z', 10, 'Test', 'Test');
  const mockUpdatedNote: Note = {...mockEditedNote, title: 'Test2', body: 'Test2'};

  let mockUserService: any;

  beforeEach(async () => {
    mockNoteService = jasmine.createSpyObj(['getCommenti', 'createCommento', 'updateCommento']);
    mockNoteService.getCommenti.and.returnValue(of([]));
    mockNoteService.createCommento.and.returnValue(of(mockNewNote));
    mockNoteService.updateCommento.and.returnValue(of(mockUpdatedNote));

    mockUserService = jasmine.createSpyObj(['getUsers']);
    mockUserService.getUsers.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [NotePageComponent],
      providers: [
        { provide: NoteService, useValue: mockNoteService },
        { provide: UserService, useValue: mockUserService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('should add new note', () => {    
    component.aggiungiCommento(mockNewNote);
    fixture.detectChanges();    
    expect(component.commenti[0]).toEqual(mockNewNote);
  });

  it('should edit note', () => {
    component.edit(mockEditedNote);
    expect(component.currentCommento).toEqual(mockEditedNote);
  });

  it('should update note', () => {
    component.modificaCommento(mockUpdatedNote);
    fixture.detectChanges();
    expect(component.currentCommento).toEqual(Note.empty());
  });
});
