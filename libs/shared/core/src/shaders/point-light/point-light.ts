import { Color, PointLight } from 'three';
import { useLight } from '../../hooks';

const PointLightWrapper = () => {
  const { light } = useLight()
  const color = light ? '#f9f4d9' : '#000000'

  const pointLight = new PointLight(
    new Color(color),
    10,
    80
  );
  pointLight.position.set(0, 40, 0);
  pointLight.castShadow = true;

  pointLight.shadow.mapSize.width = 4096;
  pointLight.shadow.mapSize.height = 4096;

  return pointLight;
};

export default PointLightWrapper;
