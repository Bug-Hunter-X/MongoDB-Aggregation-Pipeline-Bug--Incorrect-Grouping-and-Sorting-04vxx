```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection('myCollection').aggregate([
  {$match: { /*some filter*/ }},
  {$group: {_id: '$fieldName', sum: {$sum: '$fieldValue'}}}, // Incorrect group operation
  {$sort: {sum: -1}},
  {$limit: 10}
])
```