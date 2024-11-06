import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Product } from "../../types/Product";
import { handleAdd } from "../../services/product";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddProduct = () => {
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
  } = useForm<Product>({
    resolver: zodResolver(schema),
  });
  const handleAddProduct = async (data: Product) => {
    await handleAdd(data);
    toast.success("Thêm thành công sản phẩm");
    nav("/admin");
  };
  return (
    <div>
      <div className="container">
        <h1>Product Add</h1>
        <form onSubmit={handleSubmit(handleAddProduct)}>
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

export default AddProduct;
