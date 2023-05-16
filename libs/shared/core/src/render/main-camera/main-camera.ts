import { PerspectiveCamera } from 'three';

const MainCameraWrapper = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const mainCamera = new PerspectiveCamera(50, width / height, 1, 2000);
  mainCamera.translateY(10);
  mainCamera.rotateZ(45)

  return mainCamera;
};

export default MainCameraWrapper;
