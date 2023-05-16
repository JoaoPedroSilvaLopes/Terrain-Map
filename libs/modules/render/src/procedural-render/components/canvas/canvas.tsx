import { useEffect } from 'react';
import { Renderer, useLight, useShadow } from '@terrain-map/shared/core';
import { useRendered } from '../../hooks';
import THREE from 'three';

type Props = {
  area: number;
  image?: HTMLImageElement;
}

const Canvas: React.FC<Props> = ({ area }) => {
  const { shadow } = useShadow();
  const { light } = useLight();
  const { renderer, setRenderer, scene, mainCamera, animate, createTerraForm } =
    useRendered(area);

  useEffect(() => {
    setRenderer(Renderer(scene, mainCamera, shadow));
  }, [shadow, light]);

  useEffect(() => {
    animate();
    createTerraForm();
  }, [area, renderer]);

  return <canvas id="threejs" />;
};

export default Canvas;
