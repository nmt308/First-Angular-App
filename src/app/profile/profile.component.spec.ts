import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { By } from '@angular/platform-browser';
describe('Profile component', () => {
  let fixture: ComponentFixture<ProfileComponent>;
  let componentInstance: ProfileComponent;

  //beforeEach thực thi logic code trước khi chạy test
  beforeEach(async () => {
    //Tạo module tạm vì module chính chứa code không cần thiết
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
    }).compileComponents(); //load template
  });

  beforeEach(() => {
    //Khởi tạo component
    fixture = TestBed.createComponent(ProfileComponent);
    //Lấy instance vừa khởi tạo, có thể truy cập phương thức thuộc tính của component
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it('should have form with class .form-profile', () => {
    const formClass = fixture.debugElement.query(By.css('.form-profile'));
    expect(formClass).withContext('Can not find the element').toBeTruthy();
  });
});
