
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/products/components/ProductsList";
import Footer from "../features/common/Footer";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;