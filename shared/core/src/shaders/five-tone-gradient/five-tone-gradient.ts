import { NearestFilter, TextureLoader } from 'three';
import { fiveToneG } from '@procedural-render/assets';

const FiveToneGradient = () => {
  const fiveTone = new TextureLoader().load(fiveToneG);
  fiveTone.minFilter = NearestFilter;
  fiveTone.magFilter = NearestFilter;

  return fiveTone;
};

export default FiveToneGradient;
