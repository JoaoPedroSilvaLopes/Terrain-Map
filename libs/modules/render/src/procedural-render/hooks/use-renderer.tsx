import { useState } from 'react';
import {
  AmbientLight,
  MainCamera,
  PointLight,
  PointLightHelper,
  Scene,
} from '@terrain-map/shared/core';
import { WebGL1Renderer } from 'three';
import {
  BaseTable,
  Cloud,
  Water,
  ProceduralRenderUtils as PRUtils,
} from '@terrain-map/shared/meshes-components';
import { TerrainMapUtils } from '../utils';

export const useRendered = () => {
  const [area, setArea] = useState<number>(5);
  const [renderer, setRenderer] = useState<WebGL1Renderer>();

  const biome = PRUtils.getBiome('forest');
  const width = window.innerWidth;
  const height = window.innerHeight;

  // ESTRUTURAS
  const heightMap = TerrainMapUtils.getPixels(20);
  const baseTable = BaseTable(area);
  const cloud = Cloud(area / 4, area);
  const water = Water(biome.waterHeight, biome.isWater, area);

  // ILUMINAÇÃO
  const pointLight = PointLight();
  const ambientLight = AmbientLight();
  const pointLightHelper = PointLightHelper(pointLight);

  // CENA
  const scene = Scene(
    ambientLight,
    pointLight,
    pointLightHelper,
    cloud,
    water,
    baseTable
  );
  const mainCamera = MainCamera(width, height);

  const teste = false

  return {
    scene,
    mainCamera,
    heightMap,
    pointLight,
    cloud,

    area,
    setArea,
    renderer,
    setRenderer,
  };
};
