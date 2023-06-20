import { OptionsVisualization } from '@terrain-map/shared/core';
import { ColorRepresentation } from 'three';

export type GenericMesh = {
  height: number;
  position: Position;
  color?: ColorRepresentation;
  modeVisualization?: OptionsVisualization;
  detailLevel?: number;
};

export type Position = {
  x: number;
  y: number;
};
