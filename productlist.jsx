function ProductList({ products }) {
  return (
    <div>
        <div style={{
            display: "flex"
        }}>

            <div>
                <h1 style={{backgroundColor: "blue"}}>My shop</h1>
            </div>

            <div>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>

      {products.map((product, index) => (
        <div key={index} >
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <img
            src={product.img}
            alt={product.name}
            style={{ width: "150px", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;