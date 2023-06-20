import { GenericMesh } from '@terrain-map/shared/domain-types';
import { BoxGeometry, Color, Mesh, MeshToonMaterial } from 'three';
import { FiveToneGradient } from '@terrain-map/shared/core';
import { ProceduralRenderUtils as PRUtils } from '../../utils';

const CubeMesh = ({
  height,
  position,
  color,
  detailLevel,
  modeVisualization,
}: GenericMesh) => {
  const colorMesh =
    modeVisualization === 'geo'
      ? color
      : modeVisualization === 'wireframe'
      ? '#000000'
      : PRUtils.colorHeight(height);
  const sizeDimension = detailLevel ? detailLevel : 1;
  const terrainGeometry = new BoxGeometry(sizeDimension, height, sizeDimension);
  terrainGeometry.toNonIndexed();
  terrainGeometry.translate(position.x, height * 0.5, position.y);

  const gradient = FiveToneGradient();

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

export default CubeMesh;
