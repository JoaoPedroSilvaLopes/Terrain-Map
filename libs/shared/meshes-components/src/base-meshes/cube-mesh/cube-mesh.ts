import { FiveToneGradient } from '@terrain-map/shared/core';
import { GenericMesh } from '@terrain-map/shared/domain-types';
import { MeshToonMaterial, Color, Mesh, BoxGeometry } from 'three';

const CubeMesh = ({ height, position, color }: GenericMesh) => {
  const gradient = FiveToneGradient();

  const terrainGeometry = new BoxGeometry(1, height);
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

export default CubeMesh;
