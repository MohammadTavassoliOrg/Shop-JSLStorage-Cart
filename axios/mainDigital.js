axios.get('http://localhost:3000/api/goods/61f84dd96ee69e3640479ad5')
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
  document.getElementById("Add-Smartwatch").addEventListener("click", function () {
      window.localStorage.setItem(response.data[0].name, response.data[0].price);
      location.reload();
  });
  document.getElementById("Remove-Smartwatch").addEventListener("click", function () {
      localStorage.removeItem(response.data[0].name, response.data[0].price);
      location.reload();
  });
  document.getElementById("Add-Laptop").addEventListener("click", function () {
      window.localStorage.setItem(response.data[1].name, response.data[1].price);
      location.reload();
  });
  document.getElementById("Remove-Laptop").addEventListener("click", function () {
      localStorage.removeItem(response.data[1].name, response.data[1].price);
      location.reload();
  });
  document.getElementById("Add-Mobile").addEventListener("click", function () {
      window.localStorage.setItem(response.data[2].name, response.data[2].price);
      location.reload();
  });
  document.getElementById("Remove-Mobile").addEventListener("click", function () {
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