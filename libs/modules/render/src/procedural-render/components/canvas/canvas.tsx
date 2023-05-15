import { useEffect } from 'react';
import { Renderer, useShadow } from '@terrain-map/shared/core';
import { useRendered } from '../../hooks';

type Props = {
  area: number;
  image: HTMLImageElement;
};

const Canvas: React.FC<Props> = ({ area, image }) => {
  const { shadow } = useShadow();
  const { renderer, setRenderer, scene, mainCamera, animate, createTerraForm } =
    useRendered(area, image);

  useEffect(() => {
    setRenderer(Renderer(scene, mainCamera, shadow));
  }, [shadow]);

  useEffect(() => {
    animate();
    createTerraForm();
  }, [area, renderer]);

  return <canvas id="threejs" />;
};

export default Canvas;
