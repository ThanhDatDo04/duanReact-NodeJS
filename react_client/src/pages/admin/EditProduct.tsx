import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Product } from "../../types/Product";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../services/product";
import { useEffect } from "react";
import { handleEdit } from "./../../services/product";
import toast from "react-hot-toast";

const EditProduct = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const schema = z.object({
    title: z.string().max(100),
    price: z.number().min(0),
    description: z.string(),
    image: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Product>({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    const fetchProductDetail = async () => {
      if (id) {
        const { data } = await getProductDetail(id);
        reset(data);
      }
    };
    toast.success("Sửa thành công sản phẩm");
    fetchProductDetail();
  }, [id, reset]);

  const handleEditProduct = async (data: Product) => {
    if (id) {
      await handleEdit(id, data); // Gửi thông tin sản phẩm đã chỉnh sửa
      nav("/admin"); // Điều hướng trở lại trang admin sau khi cập nhật
    }
  };
  return (
    <div>
      <div className="container">
        <h1>Product Edit</h1>
        <form onSubmit={handleSubmit(handleEditProduct)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("title", {
                required: "title is required",
              })}
            />
            {errors?.title && (
              <small className="text-danger">{errors.title.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              image
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("image", {
                required: "image is required",
              })}
            />
            {errors?.image && (
              <small className="text-danger">{errors.image.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              price
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("price", {
                required: "price is required",
                valueAsNumber: true,
              })}
            />
            {errors?.price && (
              <small className="text-danger">{errors.price.message}</small>
            )}
          </div>

          {/* <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              image
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("image", {
                required: "image is required",
              })}
            />
            {errors?.image && (
              <small className="text-danger">{errors.image.message}</small>
            )}
          </div> */}

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("description", {
                required: "description is required",
              })}
            />
            {errors?.description && (
              <small className="text-danger">
                {errors.description.message}
              </small>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
