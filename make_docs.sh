docker run \
  --rm \
  -v $(pwd)/docs:/out \
  -v $(pwd)/packages/archiver/archiver.proto:/protos/archiver.proto:ro \
  -v $(pwd)/packages/core/core.proto:/protos/core.proto:ro \
  -v $(pwd)/packages/crawler/crawler.proto:/protos/crawler.proto:ro \
  pseudomuto/protoc-gen-doc