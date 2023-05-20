import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { By } from '@angular/platform-browser';

describe('ProfileComponent', () => {
  let fixture: ComponentFixture<ProfileComponent>;
  let componentInstance: ProfileComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it('should have form with class .form-profile', () => {
    const formClass = fixture.debugElement.query(By.css('.form-profile'));
    const formClass2 = fixture.nativeElement.querySelector('.form-profile');
    const formClass3 = document.querySelector('.form-profile');
    expect(formClass).withContext('Can not find the element').toBeTruthy();
  });
});
