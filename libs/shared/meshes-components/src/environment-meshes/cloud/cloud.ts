import { FiveToneGradient } from '@terrain-map/shared/core';
import { SphereGeometry, Mesh, MeshToonMaterial, BoxGeometry } from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils';

const Cloud = (cloudQuantity: number, area: number, visible: boolean) => {
  const gradient = FiveToneGradient();
  const cloudGeometry = new BoxGeometry(7.5, 2, 7);
  const cloudMaterial = new MeshToonMaterial({
    color: 0xffffff,
    transparent: true,
    gradientMap: gradient,
    visible: visible
  });

  let geo = new SphereGeometry(0, 0, 0);

  for (let i = 0; i < cloudQuantity; i++) {
    const min = Math.ceil(-area / 2);
    const max = Math.floor((area / 2) - 1);
    const cloudGeo = BufferGeometryUtils.mergeBufferGeometries([cloudGeometry]);

    cloudGeo.translate(
      Math.floor(Math.random() * (max - min + 1)) + min,
      20 + Math.random() * 0.5,
      Math.floor(Math.random() * (max - min + 1)) + min
    );

    geo = BufferGeometryUtils.mergeBufferGeometries([
      geo,
      cloudGeo,
    ]) as SphereGeometry;
  }

  const cloudMesh = new Mesh(geo, cloudMaterial);
  cloudMesh.castShadow = true;
  cloudMesh.visible = true;

  return cloudMesh;
};

export default Cloud;
