var dict=ee.Dictionary({
  "name":"Ashik",
  "hobby":"reading",
  "numList":[2,3,4,5,6,7,9]
})
var Dict=ee.List(dict.get("numList")).reduce(ee.Reducer.sum())
print(Dict)


var list=ee.List([4,5,7,8,9])
var newList=list.map(function multipliply(num){
var num=ee.Number(num)
return num.multiply(4)
})
print(newList)
