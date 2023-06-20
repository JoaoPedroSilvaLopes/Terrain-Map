import { useDetail, useLight, useModel, useShadow, useVisualization } from "@terrain-map/shared/core";

export const useContexts = () => {
  const { shadow } = useShadow();
  const { light } = useLight();
  const { detailLevel, sizeDetailtMesh } = useDetail();
  const { model } = useModel();
  const { mode: modeVisualization } = useVisualization();

  return {
    shadow,
    light,
    model,
    modeVisualization,
    sizeDetailtMesh,
    detailLevel, 
  }
}
