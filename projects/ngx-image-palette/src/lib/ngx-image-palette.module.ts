import { NgModule } from '@angular/core';
import { NgxImagePaletteComponent } from './components/ngx-image-palette/ngx-image-palette.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NgxImagePaletteComponent],
  imports: [HttpClientModule],
  exports: [NgxImagePaletteComponent],
})
export class NgxImagePaletteModule {}
