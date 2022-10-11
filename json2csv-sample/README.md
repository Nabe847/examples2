# サンプル

## コマンドラインから実行

### 基本

```
cat input.json | npx json2csv
```

| userId | name  | scores        |
| ------ | ----- | ------------- |
| 1      | user1 | [100,200,300] |
| 2      | user2 | [400,500]     |
| 3      | user3 | [700]         |

### unwind

```
cat input.json | npx json2csv --unwind scores
```

| userId | name  | scores |
| ------ | ----- | ------ |
| 1      | user1 | 100    |
| 1      | user1 | 200    |
| 1      | user1 | 300    |
| 2      | user2 | 400    |
| 2      | user2 | 500    |
| 3      | user3 | 700    |

```
cat my-cars.json | npx json2csv --unwind items,items.items
```

| carModel | price | items                                               |
| -------- | ----- | --------------------------------------------------- |
| BMW      | 15000 | {name:airbag,color:white}                           |
| BMW      | 15000 | {name:dashboard,color:black}                        |
| Porsche  | 30000 | {name:airbag,items:{position:left,color:white}}     |
| Porsche  | 30000 | {name:airbag,items:{position:right,color:gray}}     |
| Porsche  | 30000 | {name:dashboard,items:{position:left,color:gray}}   |
| Porsche  | 30000 | {name:dashboard,items:{position:right,color:black}} |
