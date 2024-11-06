import { useEffect, useState } from "react";
import { getAllProduct } from "../services/product";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";

export default function Homepage() {
  // state: products
  // call api: axios
  // show error
  // show loading

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const nav = useNavigate();

  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    console.log(savedCart);
    return savedCart ? JSON.parse(savedCart) : [];
  };

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        toast.success("Hello");
        setProducts(data);
        console.log(data);
      })
      .catch((error) => toast.error("Error: " + error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCardSumbit = (productId: string) => {
    nav(`/product/${productId}`);
  };

  return (
    <div className="container mt-5 ms-4 pt-5">
      <h1 className="fs-4 text-uppercase">Shop bán quần áo nam online</h1>
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "300px" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product, index) => (
            <div key={index} className="col-3">
              <div
                className="card h-100 shadow-sm"
                onClick={() => handleAddToCardSumbit(product._id)}
              >
                <div
                  style={{
                    width: "100%",
                    height: "200px", // Chiều cao cố định
                    overflow: "hidden", // Ẩn phần ảnh vượt quá khung chứa
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Giữ tỉ lệ ảnh, cắt cho vừa khung
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-normal d-flex justify-content-around">
                    {product.title}
                  </h5>
                  <p className="fw-bolder text-danger d-flex justify-content-center">
                    {product.price} USD
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
