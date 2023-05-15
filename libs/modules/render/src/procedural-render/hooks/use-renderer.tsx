import { useState } from 'react';
import {
  MainCamera,
  PointLight,
  Renderer,
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
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const useRendered = (area: number, image: HTMLImageElement) => {
  const [renderer, setRenderer] = useState<WebGL1Renderer>();

  // ESTRUTURAS
  const heightMap = TerrainMapUtils.getPixels(10, image);
  const baseTable = BaseTable(area);
  const cloud = Cloud(area / 4, area);
  const water = Water(0.15, true, area);

  // ILUMINAÇÃO
  const pointLight = PointLight();

  // CENA
  const mainCamera = MainCamera();
  const scene = Scene({ baseTable, cloud, water, pointLight });
  const control =
    renderer && new OrbitControls(mainCamera, renderer.domElement);

  const animate = () => {
    const time = Date.now() * 0.00005;
    pointLight.position.x = Math.sin(time) * area;
    pointLight.position.z = Math.sin(time) * area;

    cloud.position.x = Math.sin(time) * area;
    cloud.position.z = Math.sin(time) * area;

    control?.update()
    renderer && renderer.render(scene, mainCamera);
    requestAnimationFrame(animate);
  };

  const createTerraForm = () => {
    for (let i = 0; i < heightMap.length; i++) {
      for (let j = 0; j < heightMap.length; j++) {
        const i1 = i - heightMap.length / 2;
        const j1 = j - heightMap.length / 2;

        const position = PRUtils.spacingMeshCube(i1, j1);
        const heightMapData = heightMap[i][j];
        PRUtils.generateTerrain({
          height: heightMapData.height,
          position: position,
          scene: scene,
          color: heightMapData.color,
        });
      }
    }
  };

  return {
    scene,
    mainCamera,
    renderer,
    setRenderer,
    animate,
    createTerraForm,
  };
};
