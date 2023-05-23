import { PerspectiveCamera } from 'three';

const MainCameraWrapper = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  const mainCamera = new PerspectiveCamera(75, width / height, 1, 2000);
  mainCamera.translateY(20);
  mainCamera.translateX(15)
  mainCamera.translateZ(15)
  mainCamera.updateProjectionMatrix();

  return mainCamera;
};

export default MainCameraWrapper;
