# MongoDB Aggregation Pipeline Bug: Incorrect Grouping and Sorting
This repository demonstrates a common bug in MongoDB aggregation pipelines where the grouping and sorting operations produce unexpected and inaccurate results.

The bug stems from an incorrectly structured `$group` stage in the pipeline, which leads to incorrect sums and rankings.  The solution provides the correct way to structure the pipeline to produce the accurate results.

## Bug
The original aggregation pipeline incorrectly groups documents, resulting in an inaccurate sum of `fieldValue`. The `$sort` stage then sorts these inaccurate sums leading to a flawed top-10 list.

## Solution
The solution corrects the `$group` stage to ensure the documents are grouped correctly, leading to accurate sums and a correctly sorted top-10 list.
