import { resolve } from 'path';
import Long from 'long';

export interface Timestamp {
  seconds: Long;
  nanos: 0;
}

export function toDate(message: Timestamp) {
  return new Date(
    (message.seconds as unknown as number) * 1000 + message.nanos / 1000,
  );
}

export function toTimestamp(date: Date | string | number): Timestamp {
  switch (typeof date) {
    case 'string':
    case 'number': {
      const time = new Date(date).getTime();
      const long = Long.fromNumber(time, true);

      return {
        seconds: long,
        nanos: 0,
      };
    }
    default: {
      const time = date.getTime();
      const long = Long.fromNumber(time, true);

      return {
        seconds: long,
        nanos: 0,
      };
    }
  }
}

export function buildProtoPath(packageName: string) {
  return resolve(
    'node_modules',
    '@webarchiver/protoc',
    'dist',
    packageName,
    `${packageName}.proto`,
  );
}
