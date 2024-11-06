import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/Product";
import { getAllProduct, handleDelte } from "../../services/product";
import toast from "react-hot-toast";

export function Admin() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        toast.success("Hello Admin");
        setProducts(data);
      })
      .catch((error) => toast.error("Error: " + error.message));
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm("Xóa sản phẩm này?")) {
      handleDelte(id)
        .then(() => {
          toast.success(`Xóa sản phẩm thành công`);
          location.reload();
        })
        .catch((error) => toast.error("Error: " + error.message));
    }
  };

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <div className="navbar bg-warning py-0 mb-4">
        <div className="row w-100">
          <div className="col-2 bg-primary py-4 text-center">
            <a href="/admin" className="text-white text-decoration-none fs-4">
              Admin Panel
            </a>
          </div>
          <div className="col-10 d-flex align-items-center justify-content-between">
            <span className="navbar-brand">Dashboard</span>
            <Link to="/logout" className="btn btn-light">
              Logout
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div className="col-2">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              Danh Sách Sản Phẩm
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Danh Mục
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Danh Sách Người Dùng
            </a>
            <a href="/" className="list-group-item list-group-item-action">
              Trang Chủ
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-10">
          <div className="card shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Quản lý Sản Phẩm</h5>
              <Link to="add-product" className="btn btn-success">
                Thêm Sản Phẩm
              </Link>
            </div>
            <div className="card-body">
              {products.length > 0 ? (
                <table className="table table-hover table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Hình Ảnh</th>
                      <th scope="col">Tên Sản Phẩm</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product._id}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <img
                            src={product.image}
                            alt={product.title}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td>{product.title}</td>
                        <td>{product.price.toLocaleString()} VND</td>
                        <td>
                          <Link
                            to={`/admin/edit-product/${product._id}`}
                            className="btn btn-warning btn-sm me-2"
                          >
                            Sửa
                          </Link>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(product._id)}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center">Không có sản phẩm nào.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
