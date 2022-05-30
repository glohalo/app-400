import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentimageComponent } from './componentimage.component';

describe('ComponentimageComponent', () => {
  let component: ComponentimageComponent;
  let fixture: ComponentFixture<ComponentimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
