import { GenericMesh } from '@terrain-map/shared/domain-types';
import { BoxGeometry, Color, ColorRepresentation, Mesh, MeshToonMaterial, Object3D } from 'three';
import PlaneMesh from '../plane-mesh/plane-mesh';
import { FiveToneGradient } from '@terrain-map/shared/core';

// const generateCube = (color?: ColorRepresentation) => {
//   const cubeSize = 1;

//   const backFace = PlaneMesh({ color: color });
//   backFace.visible = false

//   const frontFace = PlaneMesh({ color: color });
//   frontFace.position.z = cubeSize;
//   frontFace.visible = false

//   const rightFace = PlaneMesh({ color: color });
//   rightFace.position.x = cubeSize / 2;
//   rightFace.rotation.y = Math.PI / 2;
//   rightFace.position.z = cubeSize / 2;
//   rightFace.visible = false

//   const leftFace = PlaneMesh({ color: color });
//   leftFace.position.x = -cubeSize / 2;
//   leftFace.rotation.y = Math.PI / 2;
//   leftFace.position.z = cubeSize / 2;
//   leftFace.visible = false

//   const topFace = PlaneMesh({ color: color });
//   topFace.position.z = cubeSize / 2;
//   topFace.position.y = cubeSize / 2;
//   topFace.rotation.x = Math.PI / 2;

//   const bottomFace = PlaneMesh({ color: color });
//   bottomFace.position.z = cubeSize / 2;
//   bottomFace.position.y = -(cubeSize / 2);
//   bottomFace.rotation.x = Math.PI / 2;

//   return [backFace, frontFace, rightFace, leftFace, topFace, bottomFace];
// };

const CubeMesh = ({ height, position, color }: GenericMesh) => {
  // const cubeFaces = generateCube(color);
  // const cube = new Object3D();
  // cube.add(...cubeFaces);
  // cube.translateX(position.x);
  // cube.translateY(height);
  // cube.translateZ(position.y);

  const terrainGeometry = new BoxGeometry(1, height, 1);
  terrainGeometry.toNonIndexed();
  terrainGeometry.translate(position.x, height * 0.5, position.y);

  const gradient = FiveToneGradient();

  const terrainMaterial = new MeshToonMaterial({
    color: new Color(color).convertSRGBToLinear(),
    gradientMap: gradient,
    //wireframe: true,
  });

  const terrain = new Mesh(terrainGeometry, terrainMaterial);

  terrain.castShadow = true;
  terrain.receiveShadow = true;
  terrain.frustumCulled = true;

  return terrain;
};

export default CubeMesh;
