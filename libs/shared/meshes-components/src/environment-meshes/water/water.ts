import { FiveToneGradient } from '@terrain-map/shared/core';
import { BoxGeometry, Mesh, MeshToonMaterial, Color } from 'three';

const Water = (alturaAgua: number, visibilidade: boolean, area: number) => {
  const gradient = FiveToneGradient();

  const waterGeometry = new BoxGeometry(area,  0.5, area);
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

  water.position.set(-0.5, alturaAgua, -0.5);

  return water;
};

export default Water;
