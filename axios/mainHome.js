axios.get('http://localhost:3000/api/goods/61f68f30f11f60654da4e1e8')
  .then(function (response) {
  for (let i = 0; i < response.data.length; i++) {
    document.getElementById("p1" + i).innerHTML = (response.data[i].price )
    document.getElementById("id01" + i).innerHTML = (response.data[i].name )
    document.getElementById("id02" + i).innerHTML = (response.data[i].info )
    document.getElementById("image" + i).src = (response.data[i].image.data.path)
    document.getElementById("id03" + i).innerHTML = (response.data[i].code)
  }
  const rmProduct = document.getElementById("rmProduct");
  rmProduct.onclick = function () {
      localStorage.clear();
      location.reload();
  };
  document.getElementById("Add-TV").addEventListener("click", function () {
      window.localStorage.setItem(response.data[0].name, response.data[0].price);
      location.reload();
  });
  document.getElementById("Remove-TV").addEventListener("click", function () {
      localStorage.removeItem(response.data[0].name, response.data[0].price);
      location.reload();
  });
  document.getElementById("Add-Refrigerator").addEventListener("click", function () {
      window.localStorage.setItem(response.data[1].name, response.data[1].price);
      location.reload();
  });
  document.getElementById("Remove-Refrigerator").addEventListener("click", function () {
      localStorage.removeItem(response.data[1].name, response.data[1].price);
      location.reload();
  });
  document.getElementById("Add-Washingmachine").addEventListener("click", function () {
      window.localStorage.setItem(response.data[2].name, response.data[2].price);
      location.reload();
  });
  document.getElementById("Remove-Washingmachine").addEventListener("click", function () {
      localStorage.removeItem(response.data[2].name, response.data[2].price);
      location.reload();
  });
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
