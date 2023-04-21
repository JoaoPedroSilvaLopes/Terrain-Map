import {
  ACESFilmicToneMapping,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  WebGL1Renderer,
} from 'three';

const RendererWrapper = (
  scene: Scene,
  mainCamera: PerspectiveCamera,
  canvas: HTMLCanvasElement
) => {
  const renderer = new WebGL1Renderer({
    canvas: canvas,
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, mainCamera);

  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  //renderer.autoClear;

  return renderer;
};

export default RendererWrapper;
