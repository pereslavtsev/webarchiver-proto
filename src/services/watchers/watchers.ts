/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'pereslavtsev.webarchiver.v1';

export interface PageInfo {
  id: number;
  ns: number;
  title: string;
  contentModel: string;
  pageLanguage: string;
  pageLanguageHtmlCode: string;
  pageLanguageDir: string;
  touched: string;
  lastRevId: number;
  length: number;
  fullUrl: string;
  editUrl: string;
  canonicalUrl: string;
}

export interface WatcherStreamResponse {
  pages: PageInfo[];
}

export interface ListWatchersRequest {
  pageSize: number;
  pageToken: string;
  orderBy: string;
}

export interface ListWatchersResponse {
  data: Watcher[];
  nextPageToken: string;
}

export interface PauseAllWatchersRequest {}

export interface PauseAllWatchersResponse {}

export interface GetWatcherRequest {
  id: string;
}

export interface CreateWatcherRequest {
  name: string;
}

export interface UpdateWatcherRequest {
  id: string;
  name: string;
}

export interface Watcher {
  id: string;
  name: string;
  status: Watcher_Status;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export enum Watcher_Status {
  PENDING = 0,
  ACTIVE = 1,
  PAUSED = 2,
}

export const PERESLAVTSEV_WEBARCHIVER_V1_PACKAGE_NAME =
  'pereslavtsev.webarchiver.v1';

export interface WatchersServiceClient {
  listWatchers(
    request: ListWatchersRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<ListWatchersResponse>;

  getWatcher(
    request: GetWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Watcher>;

  createWatcher(
    request: CreateWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Watcher>;

  updateWatcher(
    request: UpdateWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Watcher>;

  runWatcher(
    request: GetWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Watcher>;

  pauseWatcher(
    request: GetWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Watcher>;

  pauseAllWatchers(
    request: PauseAllWatchersRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<PauseAllWatchersResponse>;

  stopWatcher(
    request: GetWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<Watcher>;

  watcherStream(
    request: GetWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<WatcherStreamResponse>;
}

export interface WatchersServiceController {
  listWatchers(
    request: ListWatchersRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | Promise<ListWatchersResponse>
    | Observable<ListWatchersResponse>
    | ListWatchersResponse;

  getWatcher(
    request: GetWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Watcher> | Observable<Watcher> | Watcher;

  createWatcher(
    request: CreateWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Watcher> | Observable<Watcher> | Watcher;

  updateWatcher(
    request: UpdateWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Watcher> | Observable<Watcher> | Watcher;

  runWatcher(
    request: GetWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Watcher> | Observable<Watcher> | Watcher;

  pauseWatcher(
    request: GetWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Watcher> | Observable<Watcher> | Watcher;

  pauseAllWatchers(
    request: PauseAllWatchersRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | Promise<PauseAllWatchersResponse>
    | Observable<PauseAllWatchersResponse>
    | PauseAllWatchersResponse;

  stopWatcher(
    request: GetWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<Watcher> | Observable<Watcher> | Watcher;

  watcherStream(
    request: GetWatcherRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<WatcherStreamResponse>;
}

export function WatchersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'listWatchers',
      'getWatcher',
      'createWatcher',
      'updateWatcher',
      'runWatcher',
      'pauseWatcher',
      'pauseAllWatchers',
      'stopWatcher',
      'watcherStream',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('WatchersService', method)(
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
      GrpcStreamMethod('WatchersService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const WATCHERS_SERVICE_NAME = 'WatchersService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
