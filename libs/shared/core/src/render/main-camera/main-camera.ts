import { PerspectiveCamera } from 'three';

const MainCameraWrapper = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const mainCamera = new PerspectiveCamera(50, width / height, 1, 2000);
  mainCamera.position.set(0, 30, 90);

  return mainCamera;
};

export default MainCameraWrapper;
