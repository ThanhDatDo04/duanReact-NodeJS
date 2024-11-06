import { cartTotal } from "../cart/selectors";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import { Product } from "../../types/Product";
import {
  tangQuantity,
  giamQuantity,
  clearCart,
  removeOneCart,
} from "../cart/cartSlice.js";
import { Link } from "react-router-dom";

const AllCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTotalValue = useSelector(cartTotal);
  const dispatch = useDispatch();

  return (
    <div className="container" style={{ marginTop: "110px" }}>
      <h1 className="text-center mb-4">Giỏ Hàng Của Bạn</h1>

      {cart.length === 0 ? (
        <h2 className="text-center text-danger">
          Không có sản phẩm trong giỏ hàng.
        </h2>
      ) : (
        <>
          <table className="table ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Giá (VND)</th>
                <th scope="col">Số Lượng</th>
                <th scope="col">Tổng</th>
                <th scope="col">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item: Product) => (
                <tr key={item._id}>
                  <td>{item.product.title}</td>
                  <td>{item.product.price} VND</td>
                  <td>
                    <button
                      className="border border-0 bg-white  "
                      onClick={() => dispatch(tangQuantity(item._id))}
                    >
                      <AddIcon className="p-1" />
                    </button>
                    {item.quantity}
                    <button
                      className="border border-0 bg-white "
                      onClick={() => dispatch(giamQuantity(item._id))}
                    >
                      <RemoveSharpIcon className="p-1" />
                    </button>
                  </td>
                  <td>{Number(item.product.price) * item.quantity} VND</td>
                  <td>
                    <button
                      onClick={() => dispatch(removeOneCart(item._id))}
                      className="btn btn-danger"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {cartTotalValue > 0 ? (
            <h2 className="text-right" style={{ marginTop: 70 }}>
              Tổng Cộng:{" "}
              <span className="text-danger">
                {cartTotalValue.toLocaleString()} VND
              </span>
            </h2>
          ) : (
            <h2 className="text-center text-danger">Không có sản phẩm.</h2>
          )}
          <div className="text-center mt-4" style={{ marginBottom: 100 }}>
            <Link className="btn-info  btn m-3" to={"/checkout"}>
              Tiến Hành Thanh Toán
            </Link>

            <button
              onClick={() => dispatch(clearCart())}
              className="btn btn-danger ml-2"
            >
              Xóa Giỏ Hàng
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AllCart;
