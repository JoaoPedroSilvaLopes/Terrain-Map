import { AmbientLight } from 'three';

const AmbientLightWrapper = () => {
  const ambientLight = new AmbientLight(0xffccee, 0.3);
  //luzAmbiente.castShadow = true

  return ambientLight;
};

export default AmbientLightWrapper;
