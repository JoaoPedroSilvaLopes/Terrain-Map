import { useEffect } from 'react';
import { Renderer } from '@terrain-map/shared/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useRendered } from '../../hooks';
import {
  ProceduralRenderUtils as PRUtils
} from '@terrain-map/shared/meshes-components';

type Props = {
  area: number;
};

const Canvas: React.FC<Props> = ({ area }) => {
  const {
    heightMap,
    mainCamera,
    scene,
    cloud,
    pointLight,

    renderer,
    setRenderer,
  } = useRendered();

  const canvas = document.getElementById('threejs') as HTMLCanvasElement;

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
  }, [area, renderer]);

  return <canvas />;
};

export default Canvas;
