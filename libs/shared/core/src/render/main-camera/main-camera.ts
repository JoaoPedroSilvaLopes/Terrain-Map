import { PerspectiveCamera } from 'three';

const MainCameraWrapper = (width: number, height: number) => {
  const mainCamera = new PerspectiveCamera(50, width / height, 1, 2000);
  mainCamera.position.set(0, 30, 90);

  return mainCamera;
};

export default MainCameraWrapper;
