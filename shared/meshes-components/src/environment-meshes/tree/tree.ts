import {
  BoxGeometry,
  CylinderGeometry,
  Mesh,
  MeshToonMaterial,
  Color,
} from 'three';
import { Position } from '@procedural-render/domain-types';
import { FiveToneGradient } from '@procedural-render/core';

const Tree = (height: number, position: Position) => {
  const gradient = FiveToneGradient();
  const treeHeight = Math.random() + 1.25;
  const leafArray = Array(3).fill(undefined);

  // CAULA DA ÁRVORE
  const trunkGeometry = new BoxGeometry(0.45, 1, 0.45);
  trunkGeometry.translate(position.x, height + 0.5, position.y);

  const trunkMaterial = new MeshToonMaterial({
    color: new Color('#684132').convertSRGBToLinear(),
    gradientMap: gradient,
  });

  const trunkMesh = new Mesh(trunkGeometry, trunkMaterial);
  trunkMesh.castShadow = true;
  trunkMesh.receiveShadow = true;

  // FOLHAS DA ÁRVORE
  const leafMesh = leafArray.map((value, index) => {
    const leftGeometry = new CylinderGeometry(
      0,
      1.5 - index * 0.35,
      treeHeight,
      3
    );
    leftGeometry.translate(
      position.x,
      height + treeHeight * ((index + 2) * 0.5),
      position.y
    );

    const leafMaterial = new MeshToonMaterial({
      color: new Color('#013f28').convertSRGBToLinear(),
      gradientMap: gradient,
    });

    const leftMesh = new Mesh(leftGeometry, leafMaterial);
    leftMesh.castShadow = true;
    leftMesh.receiveShadow = true;

    return leftMesh;
  }) as Mesh[];

  return [trunkMesh, leafMesh];
};

export default Tree;
