import { PointLight, PointLightHelper } from 'three';

const PointLightHelperWrapper = (pointLight: PointLight) => {
  return new PointLightHelper(pointLight, 0.5, 0xf9f4d9);
};

export default PointLightHelperWrapper;
