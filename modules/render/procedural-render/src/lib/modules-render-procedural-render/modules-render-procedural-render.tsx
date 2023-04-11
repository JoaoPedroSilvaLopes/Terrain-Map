import { useEffect, useState } from 'react';
import { Form } from './components';
import { Biome, BiomeName } from '@procedural-render/domain-types';
import { WebGL1Renderer } from 'three';
import {
  AmbientLight,
  PointLight,
  PointLightHelper,
  Renderer,
  Scene,
  MainCamera,
  ProceduralRenderUtils as PRUtils,
} from '@procedural-render/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { BaseTable, Cloud, Water } from '@procedural-render/meshes-components';


import * as S from './modules-render-procedural-render.styles';
import { TerrainMapUtils } from './utils';

const ModulesRenderProceduralRender: React.FC = () => {
  // const [area, setArea] = useState(5);
  // const [biome, setBiome] = useState<Biome>(PRUtils.getBiome('forest'));

  // const changeArea = (value: number) => {
  //   setArea(area + value);
  // };
  // const changeBiome = (biomeName: BiomeName) => {
  //   setBiome(PRUtils.getBiome(biomeName));
  // };

  const area = 5
  const biome = PRUtils.getBiome('forest')
  const [renderer, setRenderer] = useState<WebGL1Renderer>();

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
  const width = window.innerWidth;
  const height = window.innerHeight;
  const mainCamera = MainCamera(width, height);

  const canvas = document.getElementById('threejs') as HTMLCanvasElement | null;

  useEffect(() => {
    if (canvas) {
      setRenderer(Renderer(scene, mainCamera, canvas));
    }
  }, [canvas]);

  useEffect(() => {
    if (renderer) {
      renderer.clear();
      renderer.dispose();
      new OrbitControls(mainCamera, renderer.domElement);

      const animate = () => {
        const time = Date.now() * 0.0005;
        pointLight.position.x = Math.sin(time) * area;
        pointLight.position.z = Math.sin(time) * area;

        cloud.position.x = Math.sin(time) * 1;
        cloud.position.z = Math.sin(time) * 1;

        renderer.render(scene, mainCamera);
        window.requestAnimationFrame(animate);
      };

      const createTerraForm = async () => {
        for (let i = 0; i < heightMap.length; i++) {
          for (let j = 0; j < heightMap.length; j++) {
            const position = PRUtils.spacingMeshHexagon(i, j);
            const heightMapData = heightMap[i][j];

            PRUtils.generateTerrain({
              height: heightMapData.height,
              position: position,
              scene: scene,
              color: heightMapData.color,
            });
          }
        }

        animate();
      };
      createTerraForm();
    }
  }, [biome, area, renderer]);

  return (
    <S.PageWrapper>
      <S.MapWrapper>
        <canvas id="threejs" />
      </S.MapWrapper>
      <S.MenuWrapper>
        <Form />
      </S.MenuWrapper>
    </S.PageWrapper>
  );
};

export default ModulesRenderProceduralRender;
