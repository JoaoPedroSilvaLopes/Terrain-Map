import {
  ACESFilmicToneMapping,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

const RendererWrapper = (
  scene: Scene,
  mainCamera: PerspectiveCamera,
  shadow: boolean
) => {
  const canvas = document.getElementById('threejs') as HTMLCanvasElement;
  const context = canvas.getContext('webgl2') as WebGL2RenderingContext;

  const renderer = new WebGLRenderer({
    canvas: canvas,
    context: context,
    antialias: true,
    logarithmicDepthBuffer: true,
    preserveDrawingBuffer: true,
    precision: 'highp',
  });

  renderer.setPixelRatio(canvas.width / canvas.height);
  renderer.render(scene, mainCamera);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.shadowMap.type = PCFSoftShadowMap;

  renderer.shadowMap.autoUpdate = true;
  renderer.shadowMap.needsUpdate = true;

  renderer.shadowMap.enabled = shadow;

  return renderer;
};

export default RendererWrapper;
