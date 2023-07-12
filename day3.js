let obj_1 = {name: "Person 1",age:5};
let obj_2 = {age:5,name: "Person 1"};
function obj (x,y) {
  let res = true;
  if (object.keys(x).length == object.keys(y).length){
    for (key in x) {
        if (x[key] == y[key]) {
            continue;
        } else {
          res = false;
          break;
        }
    }
  } else {
    res = false;
  } 
  console.log(res);
}

  obj(obj_1,obj_2);
  //2.
  const url = "https://restcountries.eu/rest/v2/all"
const select = document.querySelector("select");
const btn = document.getElementById("btn");

fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    worldCountries(data)
    selectedCountry(data)
  })

function worldCountries(myData) {
  var myArray = []
  for (var i = 0; i < myData.length; i++) {
    myArray.push(myData[i].name)
  }


  var option = ""
  for (var i = 0; i < myArray.length; i++) {
    option += `<option value=${myArray[i].name}>${myArray[i]}</option>`
  }

  select.innerHTML = option;
}

function selectedCountry() {
  var x = select.selectedIndex;
  var y = select.options;
  console.log("country index is:" + y[x].index);
}
<img src="" alt="country-flag" width="500" height="600">
<select class="" name="" value="">

</select


