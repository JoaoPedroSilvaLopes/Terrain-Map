import { useState } from 'react';
import {
  MainCamera,
  OptionsModel,
  PointLight,
  Renderer,
  Scene,
} from '@terrain-map/shared/core';
import { WebGLRenderer } from 'three';
import {
  Cloud,
  Water,
  ProceduralRenderUtils as PRUtils,
} from '@terrain-map/shared/meshes-components';
import { TerrainMapUtils } from '../utils';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createNoise2D } from 'simplex-noise';
import { Biome } from '@terrain-map/shared/domain-types';

export const useRendered = (area: number, image?: HTMLImageElement) => {
  const [renderer, setRenderer] = useState<WebGLRenderer>();
  const [biome, setBiome] = useState<Biome>(PRUtils.getBiome('forest'));

  // ESTRUTURAS
  //const heightMap = TerrainMapUtils.getPixels(200);
  const noise2D = createNoise2D();

  // CENA
  const cloud = Cloud(area / 4, area);
  const water = Water(area);
  const pointLight = PointLight();
  const scene = Scene();
  scene.add(water, pointLight, cloud);

  // CENA
  const mainCamera = MainCamera();

  const control =
    renderer && new OrbitControls(mainCamera, renderer.domElement);

  const animate = () => {
    const time = Date.now() * 0.0005;
    pointLight.position.x = Math.sin(time) * area;
    pointLight.position.z = Math.sin(time) * area;

    cloud.position.x = Math.sin(time) * area;
    cloud.position.z = Math.sin(time) * area;

    control?.update();
    renderer && renderer.render(scene, mainCamera);
    requestAnimationFrame(animate);
  };

  const createTerraForm = (model: OptionsModel) => {
    for (let i = -area / 2; i < area / 2; i++) {
      for (let j = -area / 2; j < area / 2; j++) {
        const noise = (noise2D(i * 0.1, j * 0.1) + 1) * 0.5;

        PRUtils.generateTerrain({
          model: model,
          height: noise * biome.maxHeight,
          position: {
            x: i,
            y: j,
          },
          scene,
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
