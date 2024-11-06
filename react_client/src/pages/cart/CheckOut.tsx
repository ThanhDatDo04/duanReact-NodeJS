import { useSelector } from "react-redux";
import { cartTotal } from "./selectors";
import toast from "react-hot-toast";
import { z } from "zod";
import { UserBuy } from "../../types/UserBuy";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartTotalValue = useSelector(cartTotal);
  const nav = useNavigate();

  const schema = z.object({
    name: z.string().max(20, "Tên không được vượt quá 20 ký tự."),
    email: z.string().email("Email không hợp lệ."),
    address: z.string().max(50, "Địa chỉ không được vượt quá 50 ký tự."),
    phone: z.string().length(10, "Số điện thoại phải là 10 chữ số."),
    checkOut: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserBuy>({
    resolver: zodResolver(schema),
  });

  const handlePayment = (data: UserBuy) => {
    console.log("Payment data:", data);
    toast.success("Thanh Toán Thành Công");
    nav("/");
  };

  return (
    <div className="container" style={{ marginTop: "110px" }}>
      <h1 className="text-center mb-4">Thanh Toán</h1>
      <div className="mb-4">
        <h3>
          Tổng Cộng:{" "}
          <span className="text-danger">
            {cartTotalValue.toLocaleString()} VND
          </span>
        </h3>
      </div>

      <form onSubmit={handleSubmit((data) => handlePayment(data))}>
        <div className="form-group">
          <label htmlFor="name">Tên</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            {...register("name")}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            {...register("email")}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="address">address</label>
          <input
            type="address"
            className="form-control"
            id="address"
            required
            {...register("address")}
          />
          {errors.address && (
            <p className="text-danger">{errors.address.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            required
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-danger">{errors.phone.message}</p>
          )}
        </div>

        <div className="my-1 mb-4">
          <label htmlFor="checkOut">Kiểu thanh toán</label>
          <select
            {...register("checkOut")}
            className="form-select my-3"
            aria-label="Kiểu thanh toán"
          >
            <option value="">Chọn kiểu thanh toán</option>
            <option value="1">Thanh toán qua tiền mặt</option>
            <option value="2">Thanh toán chuyển khoản</option>
            <option value="3">Thanh toán Momo</option>
          </select>
        </div>

        <button
          style={{ marginBottom: 100 }}
          type="submit"
          className="btn btn-success"
        >
          Thanh Toán
        </button>
      </form>
    </div>
  );
};

export default Checkout;
