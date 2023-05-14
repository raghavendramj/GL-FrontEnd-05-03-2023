function Product(props) {
    const { product, onAdd } = props;
    return (
        <div className="product">
            <img src={product.image} alt={product.image} />
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div className="add-to-cart" onClick={() => onAdd(product)}>
                Add to Cart
            </div>
        </div>

    );
}

export default Product;