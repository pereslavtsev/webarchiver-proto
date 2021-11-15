import { buildProtoPath } from '../utils';

export function getProtoPath() {
  return buildProtoPath('archiver');
}

export * as v1 from './archiver';
