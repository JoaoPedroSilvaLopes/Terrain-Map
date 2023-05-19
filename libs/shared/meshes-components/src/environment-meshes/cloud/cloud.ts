import { FiveToneGradient } from '@terrain-map/shared/core';
import { SphereGeometry, Mesh, MeshToonMaterial, BoxGeometry } from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils';

const Cloud = (cloudQuantity: number, area: number) => {
  // const gradient = FiveToneGradient();
  // const cloudGeometry = new BoxGeometry(7.5, 2, 7);
  // const cloudMaterial = new MeshToonMaterial({
  //   color: 0xffffff,
  //   gradientMap: gradient,
  // });

  // let geo = new SphereGeometry(0, 0, 0);

  // for (let i = 0; i < cloudQuantity; i++) {
  //   const min = Math.ceil(-area);
  //   const max = Math.floor(area);
  //   const cloudGeo = BufferGeometryUtils.mergeBufferGeometries([cloudGeometry]);

  //   cloudGeo.translate(
  //     Math.floor(Math.random() * (max - min + 1)) + min,
  //     Math.floor(Math.random() * (max - area + 1)) + area,
  //     Math.floor(Math.random() * (max - min + 1)) + min
  //   );

  //   geo = BufferGeometryUtils.mergeBufferGeometries([
  //     geo,
  //     cloudGeo,
  //   ]) as SphereGeometry;
  // }

  // const cloudMesh = new Mesh(geo, cloudMaterial);
  // cloudMesh.castShadow = true;
  // cloudMesh.visible = false;

  // return cloudMesh;
};

export default Cloud;
