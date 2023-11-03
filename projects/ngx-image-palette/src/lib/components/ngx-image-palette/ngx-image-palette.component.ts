import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Base64Service } from '../../service/base64.service';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'ngx-image-palette',
  templateUrl: `ngx-image-palette.component.html`,
  styles: [],
})
export class NgxImagePaletteComponent
  implements OnInit, OnChanges, AfterViewInit
{
  constructor(private readonly _base64Service: Base64Service) {}
  // Inputs
  @Input('imgSrc') imgSrc: string = '';

  // ViewChild
  @ViewChild('paletteCanvas', { static: true }) paletteCanvas!: ElementRef;

  // Private
  private _paletteCanvas!: HTMLCanvasElement;
  private _image: HTMLImageElement = new Image();

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this._paletteCanvas = this.paletteCanvas.nativeElement;
  }

  ngAfterViewInit() {
    this._base64Service
      .getBlobImage(this.imgSrc)
      .pipe(
        switchMap((blob) => from(this._base64Service.imageUrlToBase64(blob)))
      )
      .subscribe({
        next: (data) => {
          this._paletteCanvas.width = 400;
          this._paletteCanvas.height = 350;
          let context: CanvasRenderingContext2D | null =
            this._paletteCanvas.getContext('2d');

          this._image.src = JSON.stringify(data);

          context?.drawImage(this._image, 0, 0);
          const imgData = context?.getImageData(
            0,
            0,
            this._paletteCanvas.width,
            this._paletteCanvas.height
          );
        },
      });
  }
}
