import { categories } from "../../export/homePage";
import { products } from "../../export/homePage";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

import backgroundImage1 from "../../assets/images/slider/slide-1.jpg";
import backgroundImage2 from "../../assets/images/slider/slider-2.jpg";
import bannerDeal from "../../assets/images/banner/banner-deal.jpg";
import backgroundImage3 from "../../assets/images/banner/grocery-banner.png";
import backgroundImage4 from "../../assets/images/banner/grocery-banner-2.jpg";

import feat1 from "../../assets/images/icons/clock.svg";
import feat2 from "../../assets/images/icons/gift.svg";
import feat3 from "../../assets/images/icons/package.svg";
import feat4 from "../../assets/images/icons/refresh-cw.svg";

import cof1 from "../../assets/images/products/product-img-11.jpg";
import cof2 from "../../assets/images/products/product-img-12.jpg";
import cof3 from "../../assets/images/products/product-img-13.jpg";

const bannerData = {
  title: "100% Organic Coffee Beans",
  description: "Get the best deal before close.",
  buttonLabel: "Shop Now",
  backgroundImage: bannerDeal,
};

const products2 = [
  {
    imageSrc: cof1,
    category: "Tea, Coffee & Drinks",
    name: "Roast Ground Coffee",
    price: 13,
    discountPrice: 18,
    rating: 4.5,
  },
  {
    imageSrc: cof2,
    category: "Fruits & Vegetables",
    name: "Crushed Tomatoes",
    price: 13,
    discountPrice: 18,
    rating: 4.5,
  },
  {
    imageSrc: cof3,
    category: "Fruits & Vegetables",
    name: "Golden Pineapple",
    price: 13,
    discountPrice: 18,
    rating: 4.5,
  },
];

const Banner = ({ title, description, buttonLabel, backgroundImage }) => (
  <div className="col">
    <div
      className="pt-8 px-6 px-xl-8 rounded"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "470px",
      }}
    >
      <div>
        <h3 className="fw-bold text-white">{title}</h3>
        <p className="text-white">{description}</p>
        <a href="#!" className="btn btn-primary">
          {buttonLabel} <i className="feather-icon icon-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
  </div>
);

const Main = () => {
  return (
    <main>
      <section className="mt-8">
        <div className="container">
          <Splide
            options={{
              type: "loop",
              gap: "1rem",
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              pagination: false,
              arrows: false,
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div
                style={{
                  backgroundImage: `url(${backgroundImage1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: ".5rem",
                  backgroundPosition: "center",
                }}
              >
                <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                  <span className="badge text-bg-warning">
                    Opening Sale Discount 50%
                  </span>
                  <h2 className="text-dark display-5 fw-bold mt-4">
                    SuperMarket For Fresh Grocery
                  </h2>
                  <p className="lead">
                    Introduced a new model for online grocery shopping and
                    convenient home delivery.
                  </p>
                  <a href="#!" className="btn btn-dark mt-3">
                    Shop Now{" "}
                    <i className="feather-icon icon-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                style={{
                  backgroundImage: `url(${backgroundImage2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: ".5rem",
                  backgroundPosition: "center",
                }}
              >
                <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                  <span className="badge text-bg-warning">
                    Free Shipping - orders over $100
                  </span>
                  <h2 className="text-dark display-5 fw-bold mt-4">
                    Free Shipping on <br />
                    orders over <span className="text-primary">$100</span>
                  </h2>
                  <p className="lead">
                    Free Shipping to First-Time Customers Only, After promotions
                    and discounts are applied.
                  </p>
                  <a href="#!" className="btn btn-dark mt-3">
                    Shop Now{" "}
                    <i className="feather-icon icon-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>

      {/* <!-- Category Section Start--> */}
      <section className="mb-lg-10 mt-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <h3 className="mb-0">Featured Categories</h3>
            </div>
          </div>
          <Splide
            options={{
              perPage: 4, // Start with four slides per page
              breakpoints: {
                768: {
                  // Add a breakpoint at 768px
                  perPage: 2, // Change to two slides per page
                },
              },
              type: "loop",
              gap: "1rem",
              autoplay: true,
              pauseOnHover: false,
              pagination: false,
              resetProgress: false,
            }}
            aria-label="My Favorite Images"
          >
            {categories.map((category, index) => (
              <SplideSlide className="item" key={index}>
                <a
                  href="pages/shop-grid.html"
                  className="text-decoration-none text-inherit"
                >
                  <div className="card card-product mb-lg-4">
                    <div className="card-body text-center py-8">
                      <img
                        src={category.imageSrc}
                        alt={category.name}
                        className="mb-3 img-fluid"
                      />
                      <div className="text-truncate">{category.name}</div>
                    </div>
                  </div>
                </a>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
      {/* <!-- Category Section End--> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-3 mb-lg-0">
              <div>
                <div
                  className="py-10 px-8 rounded"
                  style={{
                    backgroundImage: `url(${backgroundImage3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">Fruits & Vegetables</h3>
                    <p className="mb-4">
                      Get Upto <span className="fw-bold">30%</span> Off
                    </p>
                    <a href="#!" className="btn btn-dark">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div>
                <div
                  className="py-10 px-8 rounded"
                  style={{
                    backgroundImage: `url(${backgroundImage4})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
                    <p className="mb-4">
                      Get Upto <span className="fw-bold">25%</span> Off
                    </p>
                    <a href="#!" className="btn btn-dark">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Popular Products Start--> */}
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <h3 className="mb-0">Popular Products</h3>
            </div>
          </div>

          <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
            {products.map((product, index) => (
              <div className="col" key={index}>
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      {product.badge && (
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-danger">
                            {product.badge}
                          </span>
                        </div>
                      )}
                      <a href="#!">
                        <img
                          src={product.imageSrc}
                          alt={product.name}
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
                        href="pages/shop-single.html"
                        className="text-inherit text-decoration-none"
                      >
                        {product.name}
                      </a>
                    </h2>
                    <div className="text-warning">
                      <small>
                        {Array.from(
                          { length: Math.floor(product.rating) },
                          (_, i) => (
                            <i key={i} className="bi bi-star-fill"></i>
                          )
                        )}
                        {product.rating % 1 !== 0 && (
                          <i className="bi bi-star-half"></i>
                        )}
                      </small>
                      <span className="text-muted small">
                        {" "}
                        {product.rating} ({product.rating * 100})
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
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Popular Products End--> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-6">
              <h3 className="mb-0">Daily Best Sells</h3>
            </div>
          </div>
          <div className="table-responsive-xl pb-6">
            <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4 flex-nowrap">
              <Banner {...bannerData} />
              {products2.map((product, index) => (
                <div key={index} className="col">
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <a href="pages/shop-single.html">
                          <img
                            src={product.imageSrc}
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
                            href="#!"
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
                        <a
                          href="#!"
                          className="text-decoration-none text-muted"
                        >
                          <small>{product.category}</small>
                        </a>
                      </div>
                      <h2 className="fs-6">
                        <a
                          href="pages/shop-single.html"
                          className="text-inherit text-decoration-none"
                        >
                          {product.name}
                        </a>
                      </h2>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">${product.price}</span>
                          <span className="text-decoration-line-through text-muted">
                            ${product.discountPrice}
                          </span>
                        </div>
                        <div>
                          <small className="text-warning">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </small>
                          <span>
                            <small>{product.rating}</small>
                          </span>
                        </div>
                      </div>
                      <div className="d-grid mt-2">
                        <a href="#!" className="btn btn-primary ">
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
                          Add to cart
                        </a>
                      </div>
                      <div className="d-flex justify-content-start text-center mt-3 w-100">
                        <div
                          className="deals-countdown w-100"
                          data-countdown="2028/12/9 00:00:00"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            {[
              {
                iconSrc: feat1,
                title: "10 minute grocery now",
                description:
                  "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
              },
              {
                iconSrc: feat2,
                title: "Best Prices & Offers",
                description:
                  "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.",
              },
              {
                iconSrc: feat3,
                title: "Wide Assortment",
                description:
                  "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
              },
              {
                iconSrc: feat4,
                title: "Easy Returns",
                description:
                  "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked.",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="mb-8 mb-xl-0">
                  <div className="mb-6">
                    <img src={item.iconSrc} alt="" />
                  </div>
                  <h3 className="h5 mb-3">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
