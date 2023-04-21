import { ColorRepresentation } from "three";

export type Biome = {
  name: BiomeName;
  stoneHeight: number;
  deepGroundHeight: number;
  groundHeight: number;
  grassHeight: number;
  sandHeight: number;
  waterHeight: number;
  maxHeight: number;
  isWater: boolean;
};

export type Result = {
  height: number;
  color: ColorRepresentation;
};

export type BiomeName = 'desert' | 'forest' | 'mountain';
