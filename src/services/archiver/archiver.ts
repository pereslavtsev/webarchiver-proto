/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'pereslavtsev.webarchiver.v1';

export interface ListArchiverTasksRequest {
  pageSize: number;
  pageToken: string;
  orderBy: string;
}

export interface ListArchiverTasksResponse {
  data: ArchiverTask[];
  nextPageToken: string;
}

export interface GetArchiverTaskRequest {
  id: string;
}

export interface CreateArchiverTaskRequest {
  url: string;
  desiredDate: Date | undefined;
  quote: string;
}

export interface ArchiverTask {
  id: string;
  url: string;
  desiredDate: Date | undefined;
  quote: string;
  status: ArchiverTask_Status;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export enum ArchiverTask_Status {
  PENDING = 0,
  IN_PROGRESS = 1,
  DONE = 2,
  FAILED = 3,
  CANCELLED = 4,
}

export const PERESLAVTSEV_WEBARCHIVER_V1_PACKAGE_NAME =
  'pereslavtsev.webarchiver.v1';

export interface ArchiverServiceClient {
  listTasks(
    request: ListArchiverTasksRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ListArchiverTasksResponse>;

  createTask(
    request: CreateArchiverTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ArchiverTask>;

  createTaskStream(
    request: CreateArchiverTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ArchiverTask>;

  getTask(
    request: GetArchiverTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ArchiverTask>;

  cancelTask(
    request: GetArchiverTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ArchiverTask>;
}

export interface ArchiverServiceController {
  listTasks(
    request: ListArchiverTasksRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | Promise<ListArchiverTasksResponse>
    | Observable<ListArchiverTasksResponse>
    | ListArchiverTasksResponse;

  createTask(
    request: CreateArchiverTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<ArchiverTask> | Observable<ArchiverTask> | ArchiverTask;

  createTaskStream(
    request: CreateArchiverTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ArchiverTask>;

  getTask(
    request: GetArchiverTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<ArchiverTask> | Observable<ArchiverTask> | ArchiverTask;

  cancelTask(
    request: GetArchiverTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<ArchiverTask> | Observable<ArchiverTask> | ArchiverTask;
}

export function ArchiverServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'listTasks',
      'createTask',
      'createTaskStream',
      'getTask',
      'cancelTask',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('ArchiverService', method)(
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
      GrpcStreamMethod('ArchiverService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const ARCHIVER_SERVICE_NAME = 'ArchiverService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
