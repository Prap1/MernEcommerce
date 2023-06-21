import AdminProductList from "../features/Admin/components/AdminProductsList";
import NavBar from "../features/navbar/Navbar";

function AdminHome() {
    return ( 
        <div>
            <NavBar>
                <AdminProductList></AdminProductList>
            </NavBar>
            Foot
        </div>
     );
}

export default AdminHome;