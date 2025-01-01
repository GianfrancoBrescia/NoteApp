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

  ngOnInit(): void {
    this.canEditCommento = false;
    this.currentCommento = Note.empty();
  }

  onSubmitNote(title: string, body: string) {
    if (!title || !body) {
      alert('Inserisci un valido commento');
      return;
    }

    if (this.canEditCommento) {
      this.editExistantNote.emit(new Note(this.currentCommento.userId, this.currentCommento.id, title, body));
      return;
    }

    this.addNewNote.emit(new Note(null, null, title, body));
  }
}
