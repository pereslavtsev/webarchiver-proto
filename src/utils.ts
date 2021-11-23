import { resolve } from 'path';
import Long from 'long';

export interface Timestamp {
  seconds: Long;
  nanos: Long;
}

export function toDate(message: Timestamp) {
  return new Date(
    (message.seconds as unknown as number) * 1000 +
      (message.nanos as unknown as number) / 1000,
  );
}

export function toTimestamp(date: Date | string | number): Timestamp {
  switch (typeof date) {
    case 'string':
    case 'number': {
      const time = new Date(date).getTime();
      const seconds = Long.fromNumber(time / 1000, true);
      const nanos = Long.fromNumber((time % 1000) * 1e6, true);

      return {
        seconds,
        nanos,
      };
    }
    default: {
      const time = date.getTime();
      const seconds = Long.fromNumber(time / 1000, true);
      const nanos = Long.fromNumber((time % 1000) * 1e6, true);

      return {
        seconds,
        nanos,
      };
    }
  }
}
