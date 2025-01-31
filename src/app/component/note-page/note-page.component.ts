import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {Note} from '../../model/Note';
import {NoteService} from '../../service/note.service';
import {UserService} from '../../service/user.service';
import {NoteFormComponent} from '../note-form/note-form.component';

@Component({
  selector: 'app-note-page',
  standalone: true,
  imports: [CommonModule, NoteFormComponent],
  templateUrl: './note-page.component.html',
  styleUrl: './note-page.component.scss'
})
export class NotePageComponent implements OnInit {

  commenti!: Note[];
  codiciFiscaliUtentiList: string[] = [];
  currentCommento!: Note;
  canEditCommento!: boolean;

  constructor(private commentoService: NoteService, private userService: UserService) {
  }

  ngOnInit() {
    this.currentCommento = Note.empty();
    this.canEditCommento = false;
    this.commentoService.getCommenti().subscribe(data => this.commenti = data);
    this.userService.getUsers().subscribe(data => this.codiciFiscaliUtentiList = data?.map(x => x.codiceFiscale!) ?? []);
  }

  aggiungiCommento(commento: Note) {
    this.commentoService.createCommento(commento).subscribe(data => this.commenti.unshift(data));
    this.currentCommento = Note.empty();
  }

  edit(commento: Note) {
    this.canEditCommento = true;
    this.currentCommento = commento;
  }

  modificaCommento(commento: Note) {
    this.canEditCommento = false;
    this.currentCommento = Note.empty();
    this.commentoService.updateCommento(commento!).subscribe();
  }
}
