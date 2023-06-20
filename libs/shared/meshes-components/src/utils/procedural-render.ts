import { Color, Scene } from 'three';
import { CubeMesh, HexagonMesh } from '../base-meshes';
import {
  Biome,
  BiomeName,
  GenericMesh,
  Position,
} from '@terrain-map/shared/domain-types';
import { OptionsModel, OptionsVisualization } from '@terrain-map/shared/core';

type Props = {
  model: OptionsModel;
  scene: Scene;
  detailLevel: number;
  modeVisualization: OptionsVisualization;
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

export const getMesh = (
  meshType: OptionsModel,
  position: Position,
  height: number,
  biome: BiomeName,
  detailLevel: number,
  modeVisualization: OptionsVisualization
) => {
  const spacedPosition = spacingMesh(meshType, position);
  const color = getColor(height, getBiome(biome));

  switch (meshType) {
    case 'cube':
      return CubeMesh({
        height,
        position: spacedPosition,
        color,
        detailLevel,
        modeVisualization,
      });
    case 'hexagon':
      return HexagonMesh({
        height,
        position: spacedPosition,
        color,
        detailLevel,
        modeVisualization,
      });
  }
};

export const getColor = (height: number, biome: Biome) => {
  const random = Math.random();

  if (height <= biome.deepGroundHeight) {
    return '#6f645c';
  } else if (height <= biome.sandHeight) {
    //random > 0.8 && scene.add(stone)
    return '#f6d7b0';
  } else if (height <= biome.grassHeight) {
    // random > 0.90 && scene.add(
    //   tree[0] as Mesh,
    //   ...tree[1] as Mesh[]
    // )
    return '#567d46';
  } else if (height <= biome.groundHeight) {
    return '#684132';
  } else {
    //random > 0.8 && scene.add(stone)
    return '#808080';
  }
};

export const colorHeight = (height: number) => {
  const maxHeight = 15;

  const colorPercent = (100 * height) / maxHeight;
  const degreeColor = 240 - (240 * colorPercent) / 100;

  const color = new Color(`hsl(${degreeColor}, 100%, 50%)`);
  return color;
};

export const generateTerrain = ({
  model,
  height,
  position,
  scene,
  detailLevel,
  modeVisualization,
}: Props) => {
  const mesh = getMesh(
    model,
    position,
    height,
    'forest',
    detailLevel,
    modeVisualization
  );
  scene.add(mesh);
};
