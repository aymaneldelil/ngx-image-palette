import { TestBed } from '@angular/core/testing';

import { NgxImagePaletteService } from './ngx-image-palette.service';

describe('NgxImagePaletteService', () => {
  let service: NgxImagePaletteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImagePaletteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
