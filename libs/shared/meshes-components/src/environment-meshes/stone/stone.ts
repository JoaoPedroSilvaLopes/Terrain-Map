import { FiveToneGradient } from '@terrain-map/shared/core';
import { Position } from '@terrain-map/shared/domain-types';
import { Color, MeshToonMaterial, SphereGeometry, Mesh } from 'three';

const Stones = (height: number, position: Position) => {
  const gradient = FiveToneGradient();

  const px = Math.random() * 0.4;
  const pz = Math.random() * 0.4;

  const StoneGeometry = new SphereGeometry(Math.random() * 0.3 + 0.1, 7, 7);
  StoneGeometry.translate(position.x + px, height, position.y + pz);

  const stoneMaterial = new MeshToonMaterial({
    color: new Color('#808080').convertSRGBToLinear(),
    gradientMap: gradient,
  });

  const stone = new Mesh(StoneGeometry, stoneMaterial);
  stone.castShadow = true;
  stone.receiveShadow = true;

  return stone;
};

export default Stones;
