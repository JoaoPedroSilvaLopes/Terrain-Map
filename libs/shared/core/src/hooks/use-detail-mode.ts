import { useContext } from 'react';
import { DetailLevelContext } from '../contexts';

export const useDetail = () => useContext(DetailLevelContext);
