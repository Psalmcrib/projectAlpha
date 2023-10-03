import { breakfastDairy } from "../../export/shop";

const Product = () => {
  return (
    <div className="col-12 mt-10">
      {/* <!-- content --> */}
      <div className="d-md-flex justify-content-between align-items-center">
        <div>
          <p className="mb-3 mb-md-0">
            {" "}
            <span className="text-dark">24 </span> Products found{" "}
          </p>
        </div>
        {/* <!-- list --> */}
        <div className="d-flex justify-content-between align-items-center">
          <a href="shop-list.html" className="text-muted me-3">
            <i className="bi bi-list-ul"></i>
          </a>
          <a href="shop-grid.html" className=" me-3 active">
            <i className="bi bi-grid"></i>
          </a>
          <a href="shop-grid-3-column.html" className="me-3 text-muted">
            <i className="bi bi-grid-3x3-gap"></i>
          </a>
          <div className="me-2">
            {/* <!-- select --> */}
            <select className="form-select">
              <option selected>Show: 50</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          {/* <!-- select --> */}
          <div>
            <select className="form-select">
              <option selected>Sort by: Featured</option>
              <option value="Low to High">Price: Low to High</option>
              <option value="High to Low"> Price: High to Low</option>
              <option value="Release Date"> Release Date</option>
              <option value="Avg. Rating"> Avg. Rating</option>
            </select>
          </div>
        </div>
      </div>
      {/* <!-- row --> */}
      <div className="row g-4 row-cols-xl-5 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
        {breakfastDairy.map((product) => {
          return (
            <div className="col" key={product.id}>
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    {product.badge && (
                      <div className="position-absolute top-0 start-0">
                        <span className="badge bg-danger">{product.badge}</span>
                      </div>
                    )}

                    <a href="shop-single.html">
                      <img
                        src={product.img}
                        alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"
                      />
                    </a>

                    <div className="card-product-action">
                      <a
                        href="#!"
                        className="btn-action"
                        data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"
                      >
                        <i
                          className="bi bi-eye"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Quick View"
                        ></i>
                      </a>
                      <a
                        href="shop-wishlist"
                        className="btn-action"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Wishlist"
                      >
                        <i className="bi bi-heart"></i>
                      </a>
                      <a
                        href="#!"
                        className="btn-action"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Compare"
                      >
                        <i className="bi bi-arrow-left-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="text-small mb-1">
                    <a href="#!" className="text-decoration-none text-muted">
                      <small>{product.category}</small>
                    </a>
                  </div>

                  <h2 className="fs-6">
                    <a
                      href="shop-single.html"
                      className="text-inherit text-decoration-none"
                    >
                      {product.name}
                    </a>
                  </h2>

                  <div className="text-warning">
                    <small>
                      {Array.from({ length: 5 }, (_, index) => (
                        <i
                          key={index}
                          className={`bi bi-star-fill${
                            index + 1 <= product.rating ? "" : "-half"
                          }`}
                        ></i>
                      ))}
                    </small>
                    <span className="text-muted small">
                      {product.numRatings}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <span className="text-dark">${product.price}</span>
                    </div>
                    <div>
                      <a href="#!" className="btn btn-primary btn-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-plus"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>{" "}
                        Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row mt-8">
        <div className="col">
          {/* <!-- nav pagination --> */}
          <nav>
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link  mx-1 " href="#" aria-label="Previous">
                  <i className="feather-icon icon-chevron-left"></i>
                </a>
              </li>
              <li className="page-item ">
                <a className="page-link  mx-1 active" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link mx-1 text-body" href="#">
                  2
                </a>
              </li>

              <li className="page-item">
                <a className="page-link mx-1 text-body" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link mx-1 text-body" href="#">
                  12
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link mx-1 text-body"
                  href="#"
                  aria-label="Next"
                >
                  <i className="feather-icon icon-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Product;
