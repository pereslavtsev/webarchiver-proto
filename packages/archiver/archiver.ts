/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'webarchiver.archiver.v1';

export interface ListTasksRequest {
  pageSize: number;
  pageToken: string;
  orderBy: string;
}

export interface ListTasksResponse {
  data: Task[];
  nextPageToken: string;
}

export interface GetTaskRequest {
  id: string;
}

export interface CreateTaskRequest {
  url: string;
  desiredDate: Date | undefined;
  quote: string;
}

export interface Task {
  id: string;
  url: string;
  desiredDate: Date | undefined;
  quote: string;
  status: Task_Status;
  snapshots: Snapshot[];
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export enum Task_Status {
  PENDING = 0,
  IN_PROGRESS = 1,
  DONE = 2,
  FAILED = 3,
  CANCELLED = 4,
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

export const WEBARCHIVER_ARCHIVER_V1_PACKAGE_NAME = 'webarchiver.archiver.v1';

export interface ArchiverServiceClient {
  listTasks(
    request: ListTasksRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ListTasksResponse>;

  createTask(
    request: CreateTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Task>;

  createTaskStream(
    request: CreateTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Task>;

  getTask(
    request: GetTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Task>;

  cancelTask(
    request: GetTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Task>;
}

export interface ArchiverServiceController {
  listTasks(
    request: ListTasksRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | Promise<ListTasksResponse>
    | Observable<ListTasksResponse>
    | ListTasksResponse;

  createTask(
    request: CreateTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Task> | Observable<Task> | Task;

  createTaskStream(
    request: CreateTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Task>;

  getTask(
    request: GetTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Task> | Observable<Task> | Task;

  cancelTask(
    request: GetTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Task> | Observable<Task> | Task;
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
