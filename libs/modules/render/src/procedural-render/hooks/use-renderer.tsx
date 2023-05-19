import { useEffect, useState } from 'react';
import {
  FiveToneGradient,
  MainCamera,
  PointLight,
  Renderer,
  Scene,
} from '@terrain-map/shared/core';
import {
  BoxGeometry,
  FrontSide,
  Mesh,
  MeshPhongMaterial,
  WebGL1Renderer,
  CullFace,
  DoubleSide,
  Camera,
  Frustum,
  Matrix4,
  MeshToonMaterial,
  Color,
  WebGLRenderer,
} from 'three';
import {
  BaseTable,
  Cloud,
  Water,
  ProceduralRenderUtils as PRUtils,
  Player,
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
  //const baseTable = BaseTable(area);
  //const cloud = Cloud(area / 4, area);
  const water = Water(0.15, true, area);

  // ILUMINAÇÃO
  const pointLight = PointLight();

  // CENA
  const mainCamera = MainCamera();
  const scene = Scene({ water, pointLight });
  const control =
    renderer && new OrbitControls(mainCamera, renderer.domElement);

  const animate = () => {
    const time = Date.now() * 0.00005;
    pointLight.position.x = Math.sin(time) * area;
    pointLight.position.z = Math.sin(time) * area;

    //cloud.position.x = Math.sin(time) * area;
    //cloud.position.z = Math.sin(time) * area;

    control?.update();
    renderer && renderer.render(scene, mainCamera);
    requestAnimationFrame(animate);
  };

  const player = Player()
  
  scene.add(player)
  

  const createTerraForm = () => {
    for (let i = -area / 2; i < area / 2; i++) {
      for (let j = -area / 2; j < area / 2; j++) {
        const position = PRUtils.spacingMeshCube(i, j);

        //if (position.length() > area + 1) continue;
        const noise = (noise2D(i * 0.1, j * 0.1) + 1) * 0.5;

        PRUtils.generateTerrain({
          height: noise * biome.maxHeight,
          position,
          biome,
          scene,
        });
      }
    }

    // for (let y = 0; y < chunkSize; y++) {
    //   for (let z = 0; z < chunkSize; z++) {
    //     for (let x = 0; x < chunkSize; x++) {
    //       const offset = (y * chunkSize ** 2) + (z * chunkSize) + x

    //       const voxel = chunk[offset]

    //       const mesh = new Mesh(geometry, material)

    //       mesh.position.set(x, y, z)
    //       scene.add(mesh)
    //     }
    //   }
    // }
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
