axios.get('http://localhost:3000/api/goods/61f68f30f11f60654da4e1e8')
  .then(function (response) {
  for (let i = 0; i < response.data.length; i++) {
    document.getElementById("p1" + i).innerHTML = (response.data[i].price + " Toman")
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
  document.getElementById("Add-Product1").addEventListener("click", function () {
      window.localStorage.setItem(response.data[0].name, response.data[0].price + " Toman");
      location.reload();
  });
  document.getElementById("Remove-Product1").addEventListener("click", function () {
      localStorage.removeItem(response.data[0].name, response.data[0].price + " Toman");
      location.reload();
  });
  document.getElementById("Add-Product2").addEventListener("click", function () {
      let local = localStorage.getItem(response.data[1].name, response.data[1].price + " Toman");
      if (local === null) {
        window.localStorage.setItem(response.data[1].name, response.data[1].price + " Toman");
      } else {
        alert("You have already added this product to your cart");
      }
      location.reload();
  });
  document.getElementById("Remove-Product2").addEventListener("click", function () {
      let local = localStorage.getItem(response.data[1].name, response.data[1].price + " Toman");
      if (local === null)  {
        alert("This product is not available in your shopping cart")
      } else {
        localStorage.removeItem(response.data[1].name, response.data[1].price + " Toman");
      }
      location.reload();
  });
  document.getElementById("Add-Product3").addEventListener("click", function () {
      window.localStorage.setItem(response.data[2].name, response.data[2].price + " Toman");
      location.reload();
  });
  document.getElementById("Remove-Product3").addEventListener("click", function () {
      localStorage.removeItem(response.data[2].name, response.data[2].price + " Toman");
      location.reload();
  });
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
