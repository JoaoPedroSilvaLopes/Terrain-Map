import { FiveToneGradient } from '@terrain-map/shared/core';
import { BoxGeometry, Mesh, MeshToonMaterial, Color } from 'three';

const Water = (area: number, visible: boolean) => {
  const gradient = FiveToneGradient();

  const waterGeometry = new BoxGeometry(area + 1,  0.5, area + 1);
  const waterMaterial = new MeshToonMaterial({
    color: new Color('#1ca3ec').convertSRGBToLinear().multiplyScalar(3),
    gradientMap: gradient,
    transparent: true,
    opacity: 0.45,
    visible: visible,
  });

  const water = new Mesh(waterGeometry, waterMaterial);
  water.castShadow = true;
  water.receiveShadow = true;
  water.material.needsUpdate = true;

  water.position.set(0, 0.15, 0);

  return water;
};

export default Water;
