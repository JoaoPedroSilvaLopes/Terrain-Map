import { AmbientLight } from 'three';

const AmbientLightWrapper = () => {
  const ambientLight = new AmbientLight(0xffccee, 0.3);
  ambientLight.castShadow = true
  ambientLight.frustumCulled = true

  return ambientLight;
};

export default AmbientLightWrapper;
