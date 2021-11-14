/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'webarchiver.archiver.v1';

export const WEBARCHIVER_ARCHIVER_V1_PACKAGE_NAME = 'webarchiver.archiver.v1';

/**
 * rpc ListTasks (ListTasksRequest) returns (ListTasksResponse);
 *  rpc CreateTask (CreateTaskRequest) returns (Task);
 */

export interface TasksServiceClient {}

/**
 * rpc ListTasks (ListTasksRequest) returns (ListTasksResponse);
 *  rpc CreateTask (CreateTaskRequest) returns (Task);
 */

export interface TasksServiceController {}

export function TasksServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [];
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
