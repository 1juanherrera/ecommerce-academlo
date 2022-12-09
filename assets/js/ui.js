function printProducts(products) {
    // identificar el contendor 

    const container = document.getElementById('products-container');

    // Generar el HTML

    let html = ''
    for(let i = 0; i < products.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3 bg-card">
        <div class="card">
        <div id="carouselExampleIndicators${i}" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators${i}" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators${i}" data-slide-to="1" class="active"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="${products[i].images.image1}" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="${products[i].images.image2}" alt="Second slide">
              </div>
            </div>
            </div>
            <div class="card-body">
                <h6 class="card-title">${products[i].name}</h6>
                <p class="card-text h5 text-right mt-3">$ ${products[i].price.toFixed(2)} </p>
                <input class="btn btn-danger" type="submit" value="Agregar" onclick="addProduct(${products[i].id})">
            </div>
        </div>
    </div>`
    } 
    container.innerHTML = html;
}

function pushProducts(products) {

  const container = document.getElementById('product-id')

  let html = ''
  for(let i = 0; i < products.length; i++) {
    html += `<tr>
              <td>
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner ">
                        <div class="carousel-item active">
                          <img class="d-block w-50" src="${products[i].images.image1}" alt="First slide">
                        </div>
                        <div class="carousel-item">
                          <img class="d-block w-50" src="${products[i].images.image2}" alt="Second slide">
                        </div>
                      </div>
                  </div>
              </td>
              <td>${products[i].name}</td>
              <td>$ ${products[i].price.toFixed(2)}</td>
              <td>
                  <button class="btn btn-danger" id="prueba" onclick="deleteTask(${products[i].id})">
                      <i class="fas fa-trash-alt"></i>
                  </button>
              </td>
            </tr>`
  }
  container.innerHTML = html;
}

export { printProducts, pushProducts }