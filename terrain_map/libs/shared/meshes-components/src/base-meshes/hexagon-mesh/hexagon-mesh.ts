import { FiveToneGradient } from '@terrain-map/shared/core';
import { GenericMesh } from '@terrain-map/shared/domain-types';
import { CylinderGeometry, MeshToonMaterial, Color, Mesh } from 'three';

const HexagonMesh = ({ height, position, color }: GenericMesh) => {
  const gradient = FiveToneGradient();

  const terrainGeometry = new CylinderGeometry(1, 1, height, 6, 1, false);
  terrainGeometry.translate(position.x, height * 0.5, position.y);

  const terrainMaterial = new MeshToonMaterial({
    color: new Color(color).convertSRGBToLinear(),
    gradientMap: gradient,
  });

  const terrain = new Mesh(terrainGeometry, terrainMaterial);
  terrain.castShadow = true;
  terrain.receiveShadow = true;

  return terrain;
};

export default HexagonMesh;
