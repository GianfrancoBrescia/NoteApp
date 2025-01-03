import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {of} from 'rxjs';
import {UserPageComponent} from './user-page.component';
import {UserService} from '../../service/user.service';
import {User} from '../../model/User';
import {Address} from '../../model/Address';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  let mockUserService: any;
  const mockUser: User = new User('RSSMRA05A03H501O', 'Mario', 'Rossi', 20, null, new Address(null, null), true, null);
  const editedUser : User = new User('VRDMRA00A03H501F', 'Mario', 'Verdi', 25, null, null, false, null);

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj(['getUsers', 'createUser', 'editUser']);
    mockUserService.getUsers.and.returnValue(of([]));
    mockUserService.createUser.and.returnValue(of(mockUser));
    mockUserService.editUser.and.returnValue(of(editedUser));

    await TestBed.configureTestingModule({
      imports: [UserPageComponent],
      providers: [
        provideRouter([]),
        { provide: UserService, useValue: mockUserService }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new user', () => {
    component.aggiungiUtente(mockUser);
    fixture.detectChanges();

    expect(mockUserService.createUser).toHaveBeenCalled();
  });

  it('should edit user', () => {
    component.edit(mockUser);
    fixture.detectChanges();
    expect(component.currentUser).toEqual(mockUser);
  });

  it('should update user', () => {
    component.modificaUtente(editedUser);
    fixture.detectChanges();
    expect(component.currentUser).toEqual(User.empty());
  });

  it('should check if user details are visible or not', () => {
    mockUser.visibility = true;
    expect(component.isHide(mockUser)).toEqual('Hide Details');
    
    mockUser.visibility = false;
    expect(component.isHide(mockUser)).toEqual('Show Details');
  });
});
