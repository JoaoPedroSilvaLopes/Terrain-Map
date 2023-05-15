import { FiveToneGradient } from '@terrain-map/shared/core';
import { BoxGeometry, Mesh, MeshToonMaterial, Color } from 'three';

const BaseTable = (area: number) => {
  const gradient = FiveToneGradient();

  const baseTableGeometry = new BoxGeometry(area, 0.05, area);
  const baseTableMaterial = new MeshToonMaterial({
    color: new Color('#f6d7b0').convertSRGBToLinear(),
    gradientMap: gradient,
  });

  const baseTable = new Mesh(baseTableGeometry, baseTableMaterial);
  baseTable.castShadow = true;
  baseTable.receiveShadow = true;

  baseTable.position.set(0, -0.1, 0);

  return baseTable;
};

export default BaseTable;
