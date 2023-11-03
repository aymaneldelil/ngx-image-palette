import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxImagePaletteModule } from 'projects/ngx-image-palette/src/lib/ngx-image-palette.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxImagePaletteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
