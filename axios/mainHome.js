axios.get('http://localhost:3000/api/goods/61f68f30f11f60654da4e1e8')
  .then(function (response) {
  for (let i = 0; i < response.data.length; i++) {
    document.getElementById("p1" + i).innerHTML = (response.data[i].price )
    document.getElementById("id01" + i).innerHTML = (response.data[i].name )
    document.getElementById("id02" + i).innerHTML = (response.data[i].info )
    document.getElementById("image" + i).src = (response.data[i].image.data.path)
    document.getElementById("id03" + i).innerHTML = (response.data[i].code)
  }
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
