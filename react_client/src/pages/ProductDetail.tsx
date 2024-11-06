import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../services/product";
import { Product } from "../types/Product";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToCart } from "./cart/cartSlice.js";

export default function ProductDetail() {
  const dispatch = useDispatch();

  const schema = z.object({
    quantity: z
      .number()
      .min(1, { message: "Số lượng phải lớn hơn hoặc bằng 1" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(schema),
  });

  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!id) return;
    getProductDetail(id)
      .then(({ data }) => setProduct(data))
      .catch((error) => toast.error("Error: " + error.message));
  }, [id]);

  const handleAddToCart = (data) => {
    const idUser = localStorage.getItem("user"); // Lấy userId từ localStorage

    // Kiểm tra xem userId có tồn tại không
    if (!idUser) {
      console.error("User ID not found.");
      return; // Ngừng hàm nếu không có userId
    }

    const productDetails = {
      productId: product._id,
      title: product.title,
      price: product.price,
      quantity: data.quantity,
      totalPrice: product.price * data.quantity, // Tính totalPrice
    };

    const action = addToCart({
      userId: idUser, // Cung cấp userId ở đây
      products: [productDetails],
    });

    console.log(action);
    dispatch(action);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(handleAddToCart)}>
        <h2 className="text-center my-4">Product Detail</h2>
        {product && (
          <div className="row">
            <div className="col">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
            </div>
            <div className="col">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: {product.price} VND</p>

              {/* Input số lượng sản phẩm */}
              <div className="form-group">
                <label htmlFor="quantity">Số lượng</label>
                <input
                  type="number"
                  id="quantity"
                  {...register("quantity", { valueAsNumber: true })}
                  className={`form-control ${
                    errors.quantity ? "is-invalid" : ""
                  }`}
                  min={1}
                  defaultValue={1}
                />
                {errors.quantity && (
                  <div className="invalid-feedback">
                    {errors.quantity.message}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Mua Ngay
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
