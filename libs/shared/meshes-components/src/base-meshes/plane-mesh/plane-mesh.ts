import { FiveToneGradient } from '@terrain-map/shared/core';
import {
  MeshToonMaterial,
  Color,
  Mesh,
  PlaneGeometry,
  ColorRepresentation,
  DoubleSide,
} from 'three';

type Props = {
  color?: ColorRepresentation
}

const PlaneMesh = ({ color }: Props) => {
  const gradient = FiveToneGradient();
  const planeGeometry = new PlaneGeometry(1, 1);

  const terrainMaterial = new MeshToonMaterial({
    color: new Color(color).convertSRGBToLinear(),
    gradientMap: gradient,
    wireframe: false
  });

  const mesh = new Mesh(planeGeometry, terrainMaterial);

  mesh.material.side = DoubleSide;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = true;

  // if (!mesh.frustumCulled) {
  //   mesh.visible = false
  // }
  // else {
  //   mesh.visible = true
  // }

  return mesh;
};

export default PlaneMesh;
