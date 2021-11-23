/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'pereslavtsev.webarchiver.v1';

export interface GetSourcesRequest {
  taskId: string;
}

export interface DiscardSourceRequest {
  id: string;
}

export interface ArchiveSourceRequest {
  id: string;
  archiveUrl: string;
  archiveDate: Date | undefined;
}

export interface Source {
  id: string;
  title: string;
  url: string;
  status: Source_Status;
  revisionDate: Date | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export enum Source_Status {
  PENDING = 0,
  MATCHED = 1,
  MISMATCHED = 2,
  FAILED = 3,
  ARCHIVED = 4,
  DISCARDED = 5,
}

export const PERESLAVTSEV_WEBARCHIVER_V1_PACKAGE_NAME =
  'pereslavtsev.webarchiver.v1';

export interface SourcesServiceClient {
  getSourcesStream(
    request: GetSourcesRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Source>;

  archiveSource(
    request: ArchiveSourceRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Source>;

  discardSource(
    request: DiscardSourceRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Source>;
}

export interface SourcesServiceController {
  getSourcesStream(
    request: GetSourcesRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Source>;

  archiveSource(
    request: ArchiveSourceRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Source> | Observable<Source> | Source;

  discardSource(
    request: DiscardSourceRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Source> | Observable<Source> | Source;
}

export function SourcesServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getSourcesStream',
      'archiveSource',
      'discardSource',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('SourcesService', method)(
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
      GrpcStreamMethod('SourcesService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const SOURCES_SERVICE_NAME = 'SourcesService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
