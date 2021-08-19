import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumByIdComponent } from './album-by-id.component';

describe('AlbumByIdComponent', () => {
  let component: AlbumByIdComponent;
  let fixture: ComponentFixture<AlbumByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
