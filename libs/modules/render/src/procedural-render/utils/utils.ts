import { Result } from '@terrain-map/shared/domain-types';
import { ColorRepresentation } from 'three';

export const getPixels = (resizeAuxNumber: number, image: HTMLImageElement): Result[][] => {
  const { canvas, context } = pixelate(resizeAuxNumber, image);

  const array: Result[][] = [];
  context && fillImageArray(array, canvas, context);

  return array;
};

const fillImageArray = (
  array: Result[][],
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D
) => {
  for (let indexLinha = 0; indexLinha < canvas.width; indexLinha++) {
    array.push([]);
    for (let indexColuna = 0; indexColuna < canvas.height; indexColuna++) {
      const { arrayPixels, grayScalePixel } = convertPixelToGrayScale([
        context.getImageData(
          indexLinha,
          indexColuna,
          canvas.width,
          canvas.height
        ).data[0],
        context.getImageData(
          indexLinha,
          indexColuna,
          canvas.width,
          canvas.height
        ).data[1],
        context.getImageData(
          indexLinha,
          indexColuna,
          canvas.width,
          canvas.height
        ).data[2],
      ]);
      const hexColor = context && convertToHex(arrayPixels);
      const dadoNormalizado = normalizarDados(grayScalePixel);

      array[indexLinha].push({
        height: dadoNormalizado,
        color: hexColor as ColorRepresentation,
      });
    }
  }
};

const convertPixelToGrayScale = (arrayPixels: number[]) => {
  const grayScalePixel =
    0.3 * arrayPixels[0] + 0.59 * arrayPixels[1] + 0.11 * arrayPixels[2];
  return { grayScalePixel, arrayPixels };
};

const normalizarDados = (grayScale: number) => {
  return Math.round(Math.sqrt(grayScale));
};

const convertToHex = (rgbCode: number[]): string => {
  const redCanal = rgbCode[0].toString(16);
  const greenCanal = rgbCode[1].toString(16);
  const blueCanal = rgbCode[2].toString(16);

  const redHex = redCanal.length === 1 ? '0' + redCanal : redCanal;
  const greenHex = greenCanal.length === 1 ? '0' + greenCanal : greenCanal;
  const blueHex = blueCanal.length === 1 ? '0' + blueCanal : blueCanal;

  return `#${redHex}${greenHex}${blueHex}`;
};

const pixelate = (resizeAuxNumber: number, image: HTMLImageElement) => {
  const resizeValue = 1 / resizeAuxNumber;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { willReadFrequently: true });

  canvas.height = image.height * resizeValue;
  canvas.width = image.width * resizeValue;
  context && context.drawImage(image, 0, 0, canvas.height, canvas.height);
  
  return {
    context: context,
    canvas: canvas,
  };
};
