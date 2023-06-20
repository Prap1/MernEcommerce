import AdminProductList from "../features/Admin/components/AdminProductsList";
import NavBar from "../features/navbar/Navbar";

function AdminHome(){
    return(
        <div>
            <NavBar><AdminProductList/></NavBar>
            
        </div>
    );
};
export default AdminHome;