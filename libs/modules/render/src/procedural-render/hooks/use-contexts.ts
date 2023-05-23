import { useDetail, useLight, useModel, useShadow } from "@terrain-map/shared/core";

export const useContexts = () => {
  const { shadow } = useShadow();
  const { light } = useLight();
  const { detailLevel, area } = useDetail();
  const { model } = useModel();

  return {
    shadow,
    light,
    model,
    area,
    detailLevel, 
  }
}
