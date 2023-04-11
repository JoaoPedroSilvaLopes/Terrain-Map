import { CylinderGeometry, Mesh, MeshToonMaterial, Color } from 'three';
import { FiveToneGradient } from '@procedural-render/core';

const BaseTable = (area: number) => {
  const gradient = FiveToneGradient();

  const baseTableGeometry = new CylinderGeometry(area + 2, area + 2, 0.05, 6);
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
