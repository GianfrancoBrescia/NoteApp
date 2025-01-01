import {Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {UserPageComponent} from './component/user-page/user-page.component';
import {UserDetailComponent} from './component/user-detail/user-detail.component';
import {NotePageComponent} from './component/note-page/note-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'users', component: UserPageComponent},
    {path: 'user-detail/:id', component: UserDetailComponent},
    {path: 'notes', component: NotePageComponent},
    {path: '**', component: PageNotFoundComponent}
];
