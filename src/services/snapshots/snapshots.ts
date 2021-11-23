/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'pereslavtsev.webarchiver.v1';

export interface GetSnapshotsRequest {
  taskId: string;
}

export interface Snapshot {
  id: string;
  uri: string;
  status: Snapshot_Status;
  capturedAt: Date | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export enum Snapshot_Status {
  PENDING = 0,
  CHECKED = 1,
  FAILED = 2,
  CANCELLED = 3,
}

export const PERESLAVTSEV_WEBARCHIVER_V1_PACKAGE_NAME =
  'pereslavtsev.webarchiver.v1';

export interface SnapshotsServiceClient {
  getSnapshotsStream(
    request: GetSnapshotsRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Snapshot>;
}

export interface SnapshotsServiceController {
  getSnapshotsStream(
    request: GetSnapshotsRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Snapshot>;
}

export function SnapshotsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getSnapshotsStream'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('SnapshotsService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('SnapshotsService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const SNAPSHOTS_SERVICE_NAME = 'SnapshotsService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
