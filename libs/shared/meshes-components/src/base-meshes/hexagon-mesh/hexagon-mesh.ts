import { FiveToneGradient } from '@terrain-map/shared/core';
import { GenericMesh } from '@terrain-map/shared/domain-types';
import { CylinderGeometry, MeshToonMaterial, Color, Mesh } from 'three';
import { ProceduralRenderUtils as PRUtils } from '../../utils';

const HexagonMesh = ({
  height,
  position,
  color,
  detailLevel,
  modeVisualization,
}: GenericMesh) => {
  const sizeDimension = detailLevel ? detailLevel : 1;
  const gradient = FiveToneGradient();

  const colorMesh =
    modeVisualization === 'geo'
      ? color
      : modeVisualization === 'wireframe'
      ? '#000000'
      : PRUtils.colorHeight(height);

  const terrainGeometry = new CylinderGeometry(
    sizeDimension,
    sizeDimension,
    height,
    6,
    1,
    false
  );
  terrainGeometry.translate(position.x, height * 0.5, position.y);

  const terrainMaterial = new MeshToonMaterial({
    color: new Color(colorMesh).convertSRGBToLinear(),
    gradientMap: gradient,
    side: 0,
    wireframe: modeVisualization !== 'wireframe' ? false : true,
  });
  const terrain = new Mesh(terrainGeometry, terrainMaterial);

  terrain.castShadow = true;
  terrain.receiveShadow = true;
  terrain.material.needsUpdate = true;
  terrain.frustumCulled = true;

  return terrain;
};

export default HexagonMesh;
