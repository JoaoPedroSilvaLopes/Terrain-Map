import { Color, Scene } from 'three';
import { AmbientLight } from '../..';

const SceneWrapper = (): Scene => {
  const ambientLight = AmbientLight();
  const scene = new Scene();
  scene.background = new Color("#3C3B38");
  scene.add(ambientLight);
  return scene;
};

export default SceneWrapper;
