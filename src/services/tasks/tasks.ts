/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'pereslavtsev.webarchiver.v1';

export interface ListTasksRequest {
  pageSize: number;
  pageToken: string;
  orderBy: string;
}

export interface ListTasksResponse {
  data: Task[];
  nextPageToken: string;
}

export interface CreateTaskRequest {
  pageId: number;
}

export interface GetTaskRequest {
  id: string;
}

export interface CancelTaskRequest {
  id: string;
}

export interface Task {
  id: string;
  pageId: number;
  status: Task_Status;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export enum Task_Status {
  PENDING = 0,
  ACCEPTED = 1,
  SKIPPED = 2,
  MATCHED = 3,
  ARCHIVED = 4,
  FAILED = 5,
  CANCELLED = 6,
  DONE = 7,
}

export const PERESLAVTSEV_WEBARCHIVER_V1_PACKAGE_NAME =
  'pereslavtsev.webarchiver.v1';

export interface TasksServiceClient {
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

  getTaskStream(
    request: GetTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Task>;

  cancelTask(
    request: CancelTaskRequest,
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

  getTaskStream(
    request: GetTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Task>;

  cancelTask(
    request: CancelTaskRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Task> | Observable<Task> | Task;
}

export function TasksServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'listTasks',
      'createTask',
      'createTaskStream',
      'getTask',
      'getTaskStream',
      'cancelTask',
    ];
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
