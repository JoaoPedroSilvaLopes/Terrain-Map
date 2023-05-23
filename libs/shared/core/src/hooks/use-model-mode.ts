import { useContext } from 'react';
import { ModelContext } from '../contexts';

export const useModel = () => useContext(ModelContext);
