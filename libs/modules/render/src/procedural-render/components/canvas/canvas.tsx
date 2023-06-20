import { useEffect, useState } from 'react';
import {
  MainCamera,
  PointLight,
  PointLightHelper,
  Renderer,
  Scene,
} from '@terrain-map/shared/core';
import { useContexts } from '../../hooks';
import { NoiseFunction2D } from 'simplex-noise';
import {
  Cloud,
  Water,
  ProceduralRenderUtils as PRUtils,
} from '@terrain-map/shared/meshes-components';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Biome } from '@terrain-map/shared/domain-types';
import { Color, WebGLRenderer, LoadingManager } from 'three';

type Props = {
  image?: HTMLImageElement;
  generate: boolean;
  bounds: google.maps.LatLng[] | undefined;
  noise2D: NoiseFunction2D;
};

const Canvas: React.FC<Props> = ({ generate, bounds, noise2D }) => {
  const area = 32;
  const [renderer, setRenderer] = useState<WebGLRenderer>();
  const [biome, setBiome] = useState<Biome>(PRUtils.getBiome('desert'));
  const {
    sizeDetailtMesh,
    detailLevel,
    light,
    model,
    modeVisualization,
    shadow,
  } = useContexts();

  

  useEffect(() => {
    setRenderer(Renderer(scene, mainCamera, shadow));
  }, [shadow]);

  const visible = modeVisualization === 'geo' ? true : false
  const scene = Scene();
  scene.background = new Color('#3C3B38');
  const pointLight = PointLight();
  const pointLightHelper = PointLightHelper(pointLight);
  const cloud = Cloud(area / 4, area, visible);
  const water = Water(area, visible);
  scene.add(water, cloud, pointLight, pointLightHelper);

  const mainCamera = MainCamera();
  renderer && new OrbitControls(mainCamera, renderer.domElement);

  const loadingManager = new LoadingManager()
  loadingManager.onLoad = () => {
    console.log('aaaaaa')
  }
  

  useEffect(() => {
    const createTerraForm = async () => {
      for (let i = -area / 2; i <= area / 2; i = i + sizeDetailtMesh) {
        for (let j = -area / 2; j <= area / 2; j = j + sizeDetailtMesh) {
          let noise = (noise2D(i * 0.1, j * 0.1) + 1) * 0.5;
          noise = Math.pow(noise, 1);

          PRUtils.generateTerrain({
            model: model,
            height: noise * biome.maxHeight,
            position: {
              x: i,
              y: j,
            },
            scene,
            detailLevel: sizeDetailtMesh,
            modeVisualization,
          });
        }
      }

      const animate = () => {
        const time = Date.now() * 0.0005;
        pointLight.position.x = Math.sin(time) * 10;
        pointLight.position.z = Math.sin(time) * 10;

        cloud.position.x = Math.sin(time) * 1;
        cloud.position.z = Math.sin(time) * 1;

        renderer && renderer.render(scene, mainCamera);
        requestAnimationFrame(animate);
      };
      animate();
    };
    createTerraForm();
  }, [
    sizeDetailtMesh,
    renderer,
    detailLevel,
    model,
    modeVisualization,
    light,
    shadow,
  ]);

  return <canvas id="threejs" />;
};

export default Canvas;
