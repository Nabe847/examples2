```
curl http://localhost:3000/echo \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"msg":"hello"}'
```

```
curl http://localhost:3000/echo \
  -X POST \
  -H @docs/headers.txt \
  -d '{"msg":"hello"}'
```

```
```
curl http://localhost:3000/echo \
  -X POST \
  -H @docs/headers.txt \
  -d @docs/request-body.json
```
