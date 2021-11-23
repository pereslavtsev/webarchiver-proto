protoc-gen:
	protoc \
		--plugin=node_modules/ts-proto/protoc-gen-ts_proto \
		--ts_proto_out=. src/services/**/*.proto \
		--ts_proto_opt=esModuleInterop=true \
		--ts_proto_opt=env=node \
		--ts_proto_opt=nestJs=true \
		--ts_proto_opt=addGrpcMetadata=true \
		--ts_proto_opt=addNestjsRestParameter=true \
		--ts_proto_opt=emitImportedFiles=false \
		--ts_proto_opt=useDate=true \
		--ts_proto_opt=unrecognizedEnum=false
		--ts_proto_opt=forceLong=long