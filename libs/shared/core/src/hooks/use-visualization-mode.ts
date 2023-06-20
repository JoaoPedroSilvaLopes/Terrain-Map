import { useContext } from 'react';
import { VisualizationContext } from '../contexts';

export const useVisualization = () => useContext(VisualizationContext);
