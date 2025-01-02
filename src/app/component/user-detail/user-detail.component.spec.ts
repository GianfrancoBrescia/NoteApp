import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {UserDetailComponent} from './user-detail.component';
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  let mockUserService: any;
  let mockUser = new User('Mario', 'Rossi', 20, null, null, true, null);

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj(['getUserByFirstName']);
    mockUserService.getUserByFirstName.and.returnValue(mockUser);

    await TestBed.configureTestingModule({
      imports: [UserDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {snapshot: {paramMap: convertToParamMap({'id': 'Mario'})}} },
        { provide: UserService, useValue: mockUserService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
