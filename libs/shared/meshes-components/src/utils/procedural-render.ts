import { Scene, Vector2 } from 'three';
import { CubeMesh } from '../base-meshes';
import {
  GenericMesh,
} from '@terrain-map/shared/domain-types';

type Props = {
  scene: Scene;
} & GenericMesh;

export const spacingMeshHexagon = (tileX: number, tileY: number) => {
  return new Vector2((tileX + (tileY % 2) * 0.5) * 1.73, tileY * 1.495);
};

export const spacingMeshCube = (tileX: number, tileY: number) => {
  return new Vector2(tileX, tileY);
};

export const generateTerrain = ({ height, position, scene, color }: Props) => {
  // const tree = Tree(height, position);
  // const stone = Stone(height, position);
  // const random = Math.random();
  const mesh = CubeMesh({ height, position, color });
  scene.add(mesh);
};
