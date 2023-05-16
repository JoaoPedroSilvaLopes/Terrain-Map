import { Mesh, Scene, Vector2 } from 'three';
import { CubeMesh } from '../base-meshes';
import {
  Biome,
  BiomeName,
  GenericMesh,
} from '@terrain-map/shared/domain-types';
import { Stone, Tree } from '../environment-meshes';

type Props = {
  scene: Scene;
  biome: Biome
} & GenericMesh;

export const getBiome = (biomeName: BiomeName) => {
  switch (biomeName) {
    case "forest":
      return {
        name: biomeName,
        stoneHeight: 3.5,
        deepGroundHeight: 0.2,
        groundHeight: 3,
        grassHeight: 3,
        sandHeight: 0.5,
        waterHeight: 0.15,
        maxHeight: 3.5,
        isWater: true,
      } as Biome;
    case "desert":
      return {
        name: biomeName,
        stoneHeight: 0,
        deepGroundHeight: 0,
        groundHeight: 0,
        grassHeight: 0,
        sandHeight: 4,
        waterHeight: 0,
        maxHeight: 4,
        isWater: false,
      } as Biome;
    case "mountain":
      return {
        name: biomeName,
        stoneHeight: 15,
        deepGroundHeight: 0.5,
        groundHeight: 3.5,
        grassHeight: 2,
        sandHeight: 1,
        waterHeight: 0.8,
        maxHeight: 15,
        isWater: true,
      } as Biome;
  }
};

export const spacingMeshHexagon = (tileX: number, tileY: number) => {
  return new Vector2((tileX + (tileY % 2) * 0.5) * 1.73, tileY * 1.495);
};

export const spacingMeshCube = (tileX: number, tileY: number) => {
  return new Vector2(tileX, tileY);
};

export const generateTerrain = ({ height, position, biome, scene }: Props) => {
  const tree = Tree(height, position);
  const stone = Stone(height, position);
  const random = Math.random();
  //const mesh = CubeMesh({ height, position, color });
  //scene.add(mesh);

  if (height <= biome.deepGroundHeight) { 
    scene.add(CubeMesh({height, position, color: "#6f645c"}))
  }

  else if (height <= biome.sandHeight) {
    scene.add(CubeMesh({height, position, color: "#f6d7b0"}))
    // random > 0.8 && scene.add(stone)
  }
  
  else if (height <= biome.grassHeight) {
    scene.add(CubeMesh({height, position, color: "#567d46"}))
    // random > 0.90 && scene.add(
    //   tree[0] as Mesh,
    //   ...tree[1] as Mesh[]
    // )
  }
  else if (height <= biome.groundHeight) { 
    scene.add(CubeMesh({height, position, color: "#684132"}))
  }

  else {
    scene.add(CubeMesh({height, position, color: "#808080"}))
    // random > 0.8 && scene.add(stone)
  }
};
