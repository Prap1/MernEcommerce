import AdminProductDetail from "../features/Admin/components/AdminProductDetails";
import NavBar from "../features/navbar/Navbar";
function AdminProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <AdminProductDetail></AdminProductDetail>
            </NavBar>
        </div>
     );
}

export default AdminProductDetailPage;