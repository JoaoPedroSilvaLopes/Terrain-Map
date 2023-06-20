import { FiveToneGradient } from '@terrain-map/shared/core';
import {
  MeshToonMaterial,
  Color,
  Mesh,
  PlaneGeometry,
  ColorRepresentation,
} from 'three';

type Props = {
  color?: ColorRepresentation
  detailLevel?: number
}

const PlaneMesh = ({ color, detailLevel }: Props) => {
  const sizeDimension = detailLevel ? detailLevel : 1
  const gradient = FiveToneGradient();
  const planeGeometry = new PlaneGeometry(sizeDimension, sizeDimension);

  const terrainMaterial = new MeshToonMaterial({
    color: new Color(color).convertSRGBToLinear(),
    gradientMap: gradient,
    wireframe: true
  });

  const mesh = new Mesh(planeGeometry, terrainMaterial);

  mesh.material.side = 0;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = true;

  return mesh;
};

export default PlaneMesh;
