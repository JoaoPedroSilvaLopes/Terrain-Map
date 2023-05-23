import { Scene } from 'three';
import { CubeMesh, HexagonMesh } from '../base-meshes';
import {
  Biome,
  BiomeName,
  GenericMesh,
  Position,
} from '@terrain-map/shared/domain-types';
import { OptionsModel } from '@terrain-map/shared/core';

type Props = {
  model: OptionsModel;
  scene: Scene;
} & GenericMesh;

export const getBiome = (biomeName: BiomeName) => {
  switch (biomeName) {
    case 'forest':
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
    case 'desert':
      return {
        name: biomeName,
        stoneHeight: 0,
        deepGroundHeight: 0,
        groundHeight: 0,
        grassHeight: 0,
        sandHeight: 4,
        waterHeight: 0,
        maxHeight: 4,
        isWater: true,
      } as Biome;
    case 'mountain':
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

export const spacingMesh = (
  meshType: OptionsModel,
  position: Position
): Position => {
  switch (meshType) {
    case 'cube':
      return {
        x: position.x,
        y: position.y,
      };
    case 'hexagon':
      return {
        x: (position.x + (position.y % 2) * 0.5) * 1.73,
        y: position.y * 1.495,
      };
  }
};

export const getMesh = (meshType: OptionsModel, position: Position, height: number, biome: BiomeName) => {
  const spacedPosition = spacingMesh(meshType, position);
  const color = getColor(height, getBiome(biome))

  switch (meshType) {
    case 'cube':
      return CubeMesh({ height, position: spacedPosition, color });
    case 'hexagon':
      return HexagonMesh({ height, position: spacedPosition, color });
  }
};

export const getColor = (height: number, biome: Biome) => {
  if (height <= biome.deepGroundHeight) {
    return "#6f645c"
  }
  else if (height <= biome.sandHeight) {
    return "#f6d7b0"
    //random > 0.8 && scene.add(stone)
  }

  else if (height <= biome.grassHeight) {
    return "#567d46"
    // random > 0.90 && scene.add(
    //   tree[0] as Mesh,
    //   ...tree[1] as Mesh[]
    // )
  }
  else if (height <= biome.groundHeight) {
    return "#684132"
  }

  else {
    return "#808080"
   // random > 0.8 && scene.add(stone)
  }
}

export const generateTerrain = ({ model, height, position, scene }: Props) => {
  const mesh = getMesh(model, position, height, 'forest');
  scene.add(mesh)
};
