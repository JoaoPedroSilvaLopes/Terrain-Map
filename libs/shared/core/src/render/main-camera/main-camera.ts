import { PerspectiveCamera } from 'three';

const MainCameraWrapper = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  const mainCamera = new PerspectiveCamera(75, width / height, 1, 2000);
  mainCamera.updateProjectionMatrix();
  mainCamera.position.set(0, 20, 0);

  return mainCamera;
};

export default MainCameraWrapper;
