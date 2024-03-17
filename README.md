// { "name":"Your_name",
//     "hobby":"reading",
//     "numList":[2,3,4,5,6,7,9]
//   }
// Convert above key-value pair into a GEE Dictionary object. Get the numList from the dictionary. Apply reducer to the list and print the sum of the numList. 

var dict=ee.Dictionary({
    "name":"Ashik",
    "hobby":"reading",
    "numList":[2,3,4,5,6,7,9]
  })
  var Dict=ee.List(dict.get("numList")).reduce(ee.Reducer.sum())
  print(Dict)
  
  
//   [4,5,7,8,,9] 
// Convert the list into a GEE List object. Apply the map method and multiply the value of each element of the list by 4.
  var list=ee.List([4,5,7,8,9])
  var newList=list.map(function multipliply(num){
  var num=ee.Number(num)
  return num.multiply(4)
  })
  print(newList)
