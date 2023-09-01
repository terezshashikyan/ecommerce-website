import Typography from "@mui/material/Typography";
import "./products.css"
import { useDispatch, useSelector } from "react-redux";
import { productsOp, productsSel } from "../../store/products";
import { userOp, userSel } from "../../store/user";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../store";
import { ProductCard } from "../../Components/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { setCurrentPage } from "../../store/products/productsSlice";
import { db, auth } from "../../firebase";



function Products() {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector(productsSel.productsListSelector);

    const currentPage = useSelector((state: RootState) => state.products.currentPage);
    const itemsPerPage = useSelector((state: RootState) => state.products.itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProducts = products.slice(startIndex, endIndex);
    const hasNextPage = endIndex < products.length;
    const hasPreviousPage = currentPage > 1;
    const savedProducts = useSelector(userSel.savedProductsListSelector);
  

    useEffect(() => {
        dispatch(userOp.getSavedProducts(auth?.currentUser?.uid || ''));
      }, [savedProducts]);
    
    useEffect(() => {
        dispatch(productsOp.getProducts());
      }, [dispatch]);

      useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
          },[])
    
    return (
        <section className="products-section">
            <Typography variant="h1">Products</Typography>
            <div className="products-list">
            {displayedProducts.map((product) => (
                <ProductCard product={product} key={product.id}  />
            ))}
            
            </div>
            <div className="pagination">
                <button
                    onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                    disabled={!hasPreviousPage}
                    >
                    Previous
                    </button>
                    <span>{currentPage}</span>
                    <button
                    onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                    disabled={!hasNextPage}
                    >
                    Next
                </button>
            </div>
        </section>
    )
}

export default Products; 