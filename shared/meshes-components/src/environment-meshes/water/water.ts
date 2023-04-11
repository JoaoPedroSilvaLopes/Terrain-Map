import { CylinderGeometry, Mesh, MeshToonMaterial, Color } from 'three';
import { FiveToneGradient } from '@procedural-render/core';

const Water = (alturaAgua: number, visibilidade: boolean, area: number) => {
  const gradient = FiveToneGradient();

  const waterGeometry = new CylinderGeometry(area + 2, area + 2, 0.5, 6);
  const waterMaterial = new MeshToonMaterial({
    color: new Color('#1ca3ec').convertSRGBToLinear().multiplyScalar(3),
    gradientMap: gradient,
    transparent: true,
    opacity: 0.45,
    visible: visibilidade,
  });

  const water = new Mesh(waterGeometry, waterMaterial);
  water.castShadow = true;
  water.receiveShadow = true;
  water.material.needsUpdate = true;

  water.position.set(0, alturaAgua, 0);

  return water;
};

export default Water;
