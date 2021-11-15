import { buildProtoPath } from '../utils';

export function getProtoPath() {
  return buildProtoPath('crawler');
}

export * as v1 from './crawler';
