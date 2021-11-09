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

export interface Task {
  id: string;
  url: string;
  comment: string;
}

export const WEBARCHIVER_ARCHIVER_V1_PACKAGE_NAME = 'webarchiver.archiver.v1';

export interface TasksServiceClient {
  listTasks(
    request: ListTasksRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ListTasksResponse>;

  getTask(
    request: GetTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Task>;
}

export interface TasksServiceController {
  listTasks(
    request: ListTasksRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | Promise<ListTasksResponse>
    | Observable<ListTasksResponse>
    | ListTasksResponse;

  getTask(
    request: GetTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Task> | Observable<Task> | Task;
}

export function TasksServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['listTasks', 'getTask'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('TasksService', method)(
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
      GrpcStreamMethod('TasksService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const TASKS_SERVICE_NAME = 'TasksService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
