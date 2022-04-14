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
  for (let x = 0; x<response.data.length; x++) {
    document.getElementById("Add-Product" + x).addEventListener("click", function () {
      let local = localStorage.getItem(response.data[x].name, response.data[x].price + " Toman");
      if (local === null) {
        window.localStorage.setItem(response.data[x].name, response.data[x].price + " Toman");
      } else {
        alert("You have already added this product to your cart");
      }
      location.reload();
  });
  document.getElementById("Remove-Product" + x).addEventListener("click", function () {
      let local = localStorage.getItem(response.data[x].name, response.data[x].price + " Toman");
      if (local === null)  {
        alert("This product is not available in your shopping cart")
      } else {
        localStorage.removeItem(response.data[x].name, response.data[x].price + " Toman");
      }
      location.reload();
  })}})
  .catch(function (error) {
    console.log(error);
  })
  // .then(function () {
  // });
