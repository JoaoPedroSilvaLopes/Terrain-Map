import { Color, PointLight } from 'three';
import { useLight } from '../../hooks';
import { useEffect } from 'react';

const PointLightWrapper = () => {
  const pointLight = new PointLight(
    new Color('#f9f4d9').convertSRGBToLinear().convertSRGBToLinear(),
    3,
    150
  );
  pointLight.position.set(0, 50, 0);
  pointLight.castShadow = true;

  pointLight.shadow.mapSize.width = 8192;
  pointLight.shadow.mapSize.height = 8192;

  return pointLight;
};

export default PointLightWrapper;
