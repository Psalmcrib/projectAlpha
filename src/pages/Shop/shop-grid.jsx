import ModalThree from "../Home/modal-3";
import Filter from "./filter";
import Product from "./product";

const ShopGrid = () => {
  return (
    <>
      <main>
        <div className="mt-4">
          <div className="container">
            {/* <!-- row --> */}
            <div className="row ">
              {/* <!-- col --> */}
              <div className="col-12">
                {/* <!-- breadcrumb --> */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="#!">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#!">Shop</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Snacks & Munchies
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-8 mb-lg-14 mb-8">
          <div className="container">
            {/* <!-- row --> */}
            <div className="row gx-10">
              <Filter />
              <Product />
            </div>
          </div>
        </section>
      </main>
      <ModalThree />
    </>
  );
};
export default ShopGrid;
