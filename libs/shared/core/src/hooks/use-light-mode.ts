import { useContext } from 'react';
import { LightContext } from '../contexts';

export const useLight = () => useContext(LightContext);
