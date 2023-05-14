import Main from "./Main";
import Header from "./header";
import data from "./products";

function Home() {

    const products = data.products;

    const onAdd = (product) => {
        console.log("onAdd -> Product :- ", product);
    }
    return (
        <div className="container mt-3">
            <Header />
            <Main products={products} onAdd={onAdd} />
        </div>
    );
}

export default Home;