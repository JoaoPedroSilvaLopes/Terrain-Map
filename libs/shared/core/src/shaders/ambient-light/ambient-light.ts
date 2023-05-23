import { AmbientLight } from 'three';

const AmbientLightWrapper = () => {
  const ambientLight = new AmbientLight('#CCFFFE', 1);
  ambientLight.castShadow = true
  ambientLight.frustumCulled = true

  return ambientLight;
};

export default AmbientLightWrapper;
