import ProductDetails from "../features/products/components/ProductDetails";
import Footer from "../features/common/Footer"
import NavBar from "../features/navbar/Navbar";
function ProductDetailPage(){
    return(
        <div>
            <NavBar><ProductDetails/></NavBar>
            
            <Footer/>
        </div>
    )
}
export default ProductDetailPage;