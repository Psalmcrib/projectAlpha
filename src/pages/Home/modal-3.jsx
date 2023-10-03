import img1 from "../../assets/images/products/product-single-img-1.jpg";
import img2 from "../../assets/images/products/product-single-img-2.jpg";
import img3 from "../../assets/images/products/product-single-img-3.jpg";
import img4 from "../../assets/images/products/product-single-img-4.jpg";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const images = [img1, img2, img3, img4];

const ModalThree = () => {
  return (
    <>
      <div
        className="modal fade"
        id="quickViewModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-8">
              <div className="position-absolute top-0 end-0 me-3 mt-3">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  {/* Main image slider */}
                  <Splide
                    options={{
                      type: "loop",
                      rewind: true,
                      pagination: false,
                      arrows: false,
                      sync: ".thumbnails",
                    }}
                    aria-labelledby="thumbnail-slider-example"
                  >
                    {images.map((image, index) => (
                      <SplideSlide
                        className="splide-zoom"
                        key={index}
                        style={{ backgroundImage: `url(${image})` }}
                      >
                        {/* img */}
                        <img src={image} alt="" />
                      </SplideSlide>
                    ))}
                  </Splide>

                  {/* Thumbnail slider */}
                  <Splide
                    options={{
                      perPage: 4,
                      gap: 10,
                      rewind: true,
                      pagination: false,
                      arrows: false,
                      isNavigation: true,
                      breakpoints: {
                        600: {
                          fixedWidth: 60,
                          fixedHeight: 44,
                        },
                      },
                    }}
                    className="thumbnails row g-3"
                    id="productModalThumbnails"
                  >
                    {images.map((image, index) => (
                      <SplideSlide className="col-3 splide-zoom" key={index}>
                        {/* img */}
                        <img src={image} alt="" />
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>

                <div className="col-lg-6">
                  <div className="ps-lg-8 mt-6 mt-lg-0">
                    <a href="#!" className="mb-4 d-block">
                      Bakery Biscuits
                    </a>
                    <h2 className="mb-1 h1">Napolitanke Ljesnjak</h2>
                    <div className="mb-4">
                      <small className="text-warning">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </small>
                      <a href="#" className="ms-2">
                        (30 reviews)
                      </a>
                    </div>
                    <div className="fs-4">
                      <span className="fw-bold text-dark">$32</span>
                      <span className="text-decoration-line-through text-muted">
                        $35
                      </span>
                      <span>
                        <small className="fs-6 ms-2 text-danger">26% Off</small>
                      </span>
                    </div>
                    <hr className="my-6" />
                    <div className="mb-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        250g
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        500g
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        1kg
                      </button>
                    </div>
                    <div>
                      {/* <!-- input --> */}
                      {/* <!-- input --> */}
                      <div className="input-group input-spinner  ">
                        <input
                          type="button"
                          value="-"
                          className="button-minus  btn  btn-sm "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step="1"
                          max="10"
                          value="1"
                          name="quantity"
                          className="quantity-field form-control-sm form-input"
                        />
                        <input
                          type="button"
                          value="+"
                          className="button-plus btn btn-sm "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="mt-3 row justify-content-start g-2 align-items-center">
                      <div className="col-lg-4 col-md-5 col-6 d-grid">
                        {/* <!-- button --> */}
                        {/* <!-- btn --> */}
                        <button type="button" className="btn btn-primary">
                          <i className="feather-icon icon-shopping-bag me-2"></i>
                          Add to cart
                        </button>
                      </div>
                      <div className="col-md-4 col-5">
                        {/* <!-- btn --> */}
                        <a
                          className="btn btn-light"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label="Compare"
                        >
                          <i className="bi bi-arrow-left-right"></i>
                        </a>
                        <a
                          className="btn btn-light"
                          href="#!"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label="Wishlist"
                        >
                          <i className="feather-icon icon-heart"></i>
                        </a>
                      </div>
                    </div>
                    <hr className="my-6" />
                    <div>
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td>Product Code:</td>
                            <td>FBB00255</td>
                          </tr>
                          <tr>
                            <td>Availability:</td>
                            <td>In Stock</td>
                          </tr>
                          <tr>
                            <td>Type:</td>
                            <td>Fruits</td>
                          </tr>
                          <tr>
                            <td>Shipping:</td>
                            <td>
                              <small>
                                01 day shipping.
                                <span className="text-muted">
                                  ( Free pickup today)
                                </span>
                              </small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalThree;
