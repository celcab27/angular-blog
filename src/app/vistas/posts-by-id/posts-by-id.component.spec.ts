import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsByIdComponent } from './posts-by-id.component';

describe('PostsByIdComponent', () => {
  let component: PostsByIdComponent;
  let fixture: ComponentFixture<PostsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
