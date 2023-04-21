import { TesteMinecraft } from "@terrain-map/shared/assets"
import { Result } from "@terrain-map/shared/domain-types"
import { ColorRepresentation } from "three"

export const getPixels = (resizeAuxNumber: number): Result[][] => {
  const { canvas, context } = pixelate(resizeAuxNumber, TesteMinecraft)

  const array = Array(canvas.width)
    .fill(Array(canvas.height)
      .fill(undefined)) as Result[][]

  context && array.forEach((linha, indexLinha) => {
    array.forEach((coluna, indexColuna) => {
      const { arrayPixels, grayScalePixel } = convertPixelToGrayScale(
        [context.getImageData(indexLinha, indexColuna, canvas.width, canvas.height).data[0],
        context.getImageData(indexLinha, indexColuna, canvas.width, canvas.height).data[1],
        context.getImageData(indexLinha, indexColuna, canvas.width, canvas.height).data[2]]
      )
      const hexColor = convertToHex(arrayPixels)

      const dadoNormalizado = normalizarDados(grayScalePixel)
      array[indexLinha][indexColuna] = {
        height: dadoNormalizado,
        color: hexColor as ColorRepresentation
      }
    })
  })

  return array
}

const convertPixelToGrayScale = (arrayPixels: number[]) => {
  const grayScalePixel = (0.3 * arrayPixels[0]) + (0.59 * arrayPixels[1]) + (0.11 * arrayPixels[2])
  return { grayScalePixel, arrayPixels }
}

const convertToHex = (rgbCode: number[]): string => {
  return `#${rgbCode[0].toString(16)}${rgbCode[1].toString(16)}${rgbCode[2].toString(16)}`
}

const normalizarDados = (grayScale: number) => {
  return Math.round(Math.sqrt(grayScale))
}

const pixelate = (resizeAuxNumber: number, imgUrl: string) => {
  const img = new Image()
  img.src = imgUrl
  const resizeValue = 1 / resizeAuxNumber

  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d', { willReadFrequently: true })
  canvas.height = img.height * resizeValue
  canvas.width = img.width * resizeValue

  context && context.drawImage(
    img,
    0,
    0,
    canvas.height,
    canvas.height,
  )

  return {
    context: context,
    canvas: canvas,
  }
}
