import { buildProtoPath } from '../utils';

export function getProtoPath() {
  return buildProtoPath('core');
}

export * as v1 from './core';
