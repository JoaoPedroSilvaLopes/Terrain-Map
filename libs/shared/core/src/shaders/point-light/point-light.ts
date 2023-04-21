import { Color, PointLight } from 'three';

const PointLightWrapper = () => {
  const pointLight = new PointLight(
    new Color('#f9f4d9').convertSRGBToLinear().convertSRGBToLinear(),
    3,
    150
  );
  pointLight.position.set(0, 30, 0);
  pointLight.castShadow = true;

  pointLight.shadow.mapSize.width = 4096;
  pointLight.shadow.mapSize.height = 4096;

  return pointLight;
};

export default PointLightWrapper;
