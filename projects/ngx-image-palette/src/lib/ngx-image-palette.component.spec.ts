import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImagePaletteComponent } from './ngx-image-palette.component';

describe('NgxImagePaletteComponent', () => {
  let component: NgxImagePaletteComponent;
  let fixture: ComponentFixture<NgxImagePaletteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxImagePaletteComponent]
    });
    fixture = TestBed.createComponent(NgxImagePaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
