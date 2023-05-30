import { useEffect } from 'react';
import { Renderer } from '@terrain-map/shared/core';
import { useContexts, useRendered } from '../../hooks';

type Props = {
  image?: HTMLImageElement;
  generate: boolean;
  bounds: google.maps.LatLng[] | undefined;
};

const Canvas: React.FC<Props> = ({ generate, bounds }) => {
  const createBounds = () => {
    bounds && console.log('NE', bounds[0].lat(), bounds[0].lng());
    bounds && console.log('NW', bounds[0].lat(), bounds[1].lng());
    bounds && console.log('SE', bounds[1].lat(), bounds[0].lng());
    bounds && console.log('SW', bounds[1].lat(), bounds[1].lng()); 
  }
  createBounds()

  const { area, detailLevel, light, model, shadow } = useContexts();
  const { renderer, setRenderer, scene, mainCamera, animate, createTerraForm } =
    useRendered(area);

  useEffect(() => {
    setRenderer(Renderer(scene, mainCamera, shadow));
  }, []);

  useEffect(() => {
    animate();
    createTerraForm(model);
  }, [area, renderer, detailLevel, model, light, shadow]);

  return <canvas id="threejs" />;
};

export default Canvas;
