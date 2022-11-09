import { HTTP } from '../http';
import { IData } from './types';

export const getData = async () => HTTP.client().get<IData>('/');
