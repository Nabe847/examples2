1. `cat input.json`
2. `jq '[.]` 配列に変換
3. `map(. + { x: .x[], y: .y[] })` `.` のプロパティを`{ x: .x[], y: .y[] }`で上書きする
4. `.[]` 配列を展開

```
cat input.json | jq '[.] | map(. + { x: .x[], y: .y[] }) | .[]'
```

```
[
  {
    "x": 1,
    "y": 3,
    "z": "hoge"
  },
  {
    "x": 1,
    "y": 4,
    "z": "hoge"
  },
  {
    "x": 2,
    "y": 3,
    "z": "hoge"
  },
  {
    "x": 2,
    "y": 4,
    "z": "hoge"
  }
]
```
