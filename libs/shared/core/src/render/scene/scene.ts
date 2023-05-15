import { Color, Mesh, PointLight, Scene } from 'three';
import { AmbientLight } from '../..';

type SceneProps = {
  pointLight: PointLight;
  water: Mesh;
  baseTable: Mesh;
  cloud: Mesh;
};

const SceneWrapper = ({ baseTable, cloud, pointLight, water }: SceneProps) => {
  const ambientLight = AmbientLight();

  const scene = new Scene();
  scene.background = new Color('#4B696C');
  scene.add(ambientLight, pointLight, cloud, water, baseTable);

  return scene;
};

export default SceneWrapper;
