import {
  AmbientLight,
  Color,
  Mesh,
  PointLight,
  PointLightHelper,
  Scene,
} from 'three';

const SceneWrapper = (
  ambientLight: AmbientLight,
  pointLight: PointLight,
  pointLightHelper: PointLightHelper,
  cloud: Mesh,
  water: Mesh,
  baseTable: Mesh
) => {
  const scene = new Scene();
  scene.background = new Color('#FFEECC');
  scene.add(
    ambientLight,
    pointLight,
    pointLightHelper,
    //cloud,
    water,
    baseTable
  );

  return scene;
};

export default SceneWrapper;
