import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Note} from '../../model/Note';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss'
})
export class NoteFormComponent implements OnInit {

  @Output()
  addNewNote: EventEmitter<Note> = new EventEmitter<Note>();

  @Output()
  editExistantNote: EventEmitter<Note> = new EventEmitter<Note>();

  @Input() canEditCommento!: boolean;
  @Input() currentCommento!: Note;
  @Input() codiciFiscaliUtentiList!: string[];

  ngOnInit(): void {
    this.canEditCommento = false;
    this.currentCommento = Note.empty();
  }

  onSubmitNote(title: string, body: string, userCf: string) {
    if (!title || !body || !userCf) {
      alert('Inserisci un valido commento');
      return;
    }

    const note: Note = new Note(userCf, this.currentCommento.id ?? null, title, body);

    if (this.canEditCommento) {
      this.editExistantNote.emit(note);
      return;
    }

    this.addNewNote.emit(note);
  }
}
