import { ColorRepresentation } from 'three';

export type GenericMesh = {
  height: number;
  position: Position;
  color?: ColorRepresentation;
};

export type Position = {
  x: number;
  y: number;
};
