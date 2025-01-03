import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgForm} from '@angular/forms';
import {UserFormComponent} from './user-form.component';
import {User} from '../../model/User';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  const newUser = new User('RSSMRA05A03H501O', 'Mario', 'Rossi', 20, null, null, true, null);
  const editedUser = new User('VRDMRA00A03H501F', 'Mario', 'Verdi', 25, null, null, true, null);

  let mockUserForm = {
    valid: false,
    submitted: true,
    value: newUser
  } as unknown as NgForm;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit user - invalid user', () => {
    spyOn(window, 'alert');
    
    component.onSubmitUser(mockUserForm);
    fixture.detectChanges();
    
    expect(window.alert).toHaveBeenCalledWith('Form not valid');
  });

  it('should submit user - new user', () => {
    spyOn(component.addNewUser, 'emit');
    
    const form = {...mockUserForm, valid: true} as unknown as NgForm;
    
    component.onSubmitUser(form);
    fixture.detectChanges();
    
    expect(component.addNewUser.emit).toHaveBeenCalledWith(newUser);
  });

  it('should submit user - edited user', () => {
    spyOn(component.editExistantUser, 'emit');

    const form = {...mockUserForm, valid: true, value: editedUser} as unknown as NgForm;
    
    component.canEditUser = true;
    component.onSubmitUser(form);
    fixture.detectChanges();
    
    expect(component.editExistantUser.emit).toHaveBeenCalledWith(editedUser);
  });
});
