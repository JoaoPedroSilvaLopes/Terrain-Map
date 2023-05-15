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
  shadow: boolean
) => {
  const renderer = new WebGL1Renderer({
    canvas: document.getElementById('threejs') as HTMLCanvasElement,
    antialias: true,
    logarithmicDepthBuffer: true,
    preserveDrawingBuffer: true,
    precision: 'highp',
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, mainCamera);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = true;
  renderer.shadowMap.needsUpdate = true;

  renderer.shadowMap.enabled = shadow;

  return renderer;
};

export default RendererWrapper;
