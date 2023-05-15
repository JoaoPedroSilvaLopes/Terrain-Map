import { fiveToneG } from '@terrain-map/shared/assets';
import { NearestFilter, TextureLoader } from 'three';

const FiveToneGradient = () => {
  const fiveTone = new TextureLoader().load(fiveToneG);
  fiveTone.minFilter = NearestFilter;
  fiveTone.magFilter = NearestFilter;

  return fiveTone;
};

export default FiveToneGradient;
