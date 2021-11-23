# WebArchiver Protocol Buffers

![GitHub package.json version](https://img.shields.io/github/package-json/v/pereslavtsev/webarchiver-proto)
![Codacy branch grade](https://img.shields.io/codacy/grade/e566516024ed4310b066c9ac2759483e/master)


A shared package of [Protocol Buffers](https://developers.google.com/protocol-buffers) (Protobuf) schemas and generated code for using between WebArchiver gRPC microservices. TypeScript types was created via [`ts-proto`](https://github.com/stephenh/ts-proto) generator with a Nest.js server interfaces [options](https://github.com/stephenh/ts-proto/blob/main/NESTJS.markdown).

## Install
```
$ npm i @pereslavtsev/webarchiver-protoc

$ yarn add @pereslavtsev/webarchiver-protoc

$ pnpm add @pereslavtsev/webarchiver-protoc
```

## Usage
```bash
$ pnpm protoc:gen

$ pnpm build
```

```typescript
import { core } from '@pereslavtsev/webarchiver-protoc';

core.v1
```

## License
ISC
