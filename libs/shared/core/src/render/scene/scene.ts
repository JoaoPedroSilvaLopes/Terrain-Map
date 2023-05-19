import { Color, Mesh, PointLight, Scene } from 'three';
import { AmbientLight } from '../..';

type SceneProps = {
  pointLight: PointLight;
  water: Mesh;
  baseTable?: Mesh;
  cloud?: Mesh;
};

const SceneWrapper = ({ baseTable, cloud, pointLight, water }: SceneProps) => {
  const ambientLight = AmbientLight();

  const scene = new Scene();
  scene.background = new Color('#94CED3');
  scene.add(ambientLight, pointLight, water);

  return scene;
};

export default SceneWrapper;
