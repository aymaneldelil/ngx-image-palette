import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor() {}

  public rgbaToRgb = (imageData: Uint8ClampedArray) => {
    /**
     * @param imageData   :  A Uint8ClampedArray representing a one-dimensional array containing the data in the RGBA order,
     *                       with integer values between 0 and 255 (inclusive). The order goes by rows from the top-left pixel
     *                        to the bottom-right.
     * @see  https://developer.mozilla.org/en-US/docs/Web/API/ImageData]
     */

    const rgbValues = [];
    for (let i = 0; i < imageData.length; i += 4) {
      const rgb = {
        r: imageData[i],
        g: imageData[i + 1],
        b: imageData[i + 2],
      };
      rgbValues.push(rgb);
    }
    return rgbValues;
  };
}
