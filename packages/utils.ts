import { resolve } from 'path';

export function buildProtoPath(packageName: string) {
  return resolve(
      'node_modules',
      '@webarchiver/protoc',
      'dist',
      packageName,
      `${packageName}.proto`,
  ),
}
