import { useEffect } from 'react';
import { Renderer } from '@terrain-map/shared/core';
import { useContexts, useRendered } from '../../hooks';

type Props = {
  image?: HTMLImageElement;
  generate: boolean;
};

const Canvas: React.FC<Props> = ({ generate }) => {
  const { area, detailLevel, light, model, shadow } = useContexts();
  const { renderer, setRenderer, scene, mainCamera, animate, createTerraForm } =
    useRendered(area);

  useEffect(() => {
    setRenderer(Renderer(scene, mainCamera, shadow));
  }, [shadow]);

  useEffect(() => {
    animate();
    createTerraForm(model);
  }, [area, renderer, detailLevel, model, light]);

  return <canvas id="threejs" />;
};

export default Canvas;
