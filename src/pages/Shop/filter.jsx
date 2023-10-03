const Filter = () => {
  return (
    <div className="col-12">
      {/* <!-- filter btn --> */}
      <a
        className="btn btn-outline-gray-400 text-muted"
        data-bs-toggle="collapse"
        href="#collapseFilter"
        role="button"
        aria-expanded="true"
        aria-controls="collapseFilter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-filter me-2"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>{" "}
        Filters
      </a>

      {/* <!-- collapse --> */}
      <div className="collapse mt-6 show" id="collapseFilter">
        <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2">
          {/* <!-- col --> */}
          <div className="col">
            {/* <!-- card --> */}
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-6">
                {/* <!-- content --> */}
                <h5 className="mb-3">Categories</h5>
                {/* <!-- nav --> */}
                <ul className="nav nav-category">
                  {/* <!-- nav item --> */}
                  <li className="nav-item border-bottom w-100">
                    <a href="#" className="nav-link">
                      Dairy, Bread & Eggs
                    </a>
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item border-bottom w-100">
                    <a href="#" className="nav-link">
                      {" "}
                      Snacks & Munchies
                    </a>
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item border-bottom w-100">
                    <a href="#" className="nav-link">
                      {" "}
                      Fruits & Vegetables
                    </a>
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item border-bottom w-100">
                    <a href="#" className="nav-link">
                      {" "}
                      Cold Drinks & Juices{" "}
                    </a>
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item border-bottom w-100">
                    <a href="#" className="nav-link">
                      {" "}
                      Breakfast & Instant Food
                    </a>
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item border-bottom w-100">
                    <a href="#" className="nav-link">
                      {" "}
                      Bakery & Biscuits
                    </a>
                  </li>
                  {/* <!-- nav item --> */}
                  <li className="nav-item ">
                    <a href="#" className="nav-link">
                      {" "}
                      Chicken, Meat & Fish
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- col --> */}
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-6">
                {/* <!-- content --> */}
                <div>
                  <h5 className="mb-3">Stores</h5>
                  <div className="my-4">
                    {/* <!-- input --> */}
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search by store"
                    />
                  </div>
                  <div className="form-check mb-2">
                    {/* <!-- input --> */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="eGrocery"
                      checked
                    />
                    <label className="form-check-label" htmlFor="eGrocery">
                      E-Grocery
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    {/* <!-- input --> */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="DealShare"
                    />
                    <label className="form-check-label" htmlFor="DealShare">
                      DealShare
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    {/* <!-- input --> */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Dmart"
                    />
                    <label className="form-check-label" htmlFor="Dmart">
                      DMart
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    {/* <!-- input --> */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Blinkit"
                    />
                    <label className="form-check-label" htmlFor="Blinkit">
                      Blinkit
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    {/* <!-- input --> */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="BigBasket"
                    />
                    <label className="form-check-label" htmlFor="BigBasket">
                      BigBasket
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    {/* <!-- input --> */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="StoreFront"
                    />
                    <label className="form-check-label" htmlFor="StoreFront">
                      StoreFront
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    {/* <!-- input --> */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="Spencers"
                    />
                    <label className="form-check-label" htmlFor="Spencers">
                      Spencers
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    {/* <!-- input --> */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="onlineGrocery"
                    />
                    <label className="form-check-label" htmlFor="onlineGrocery">
                      Online Grocery
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- col --> */}
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-6">
                {/* <!-- content --> */}
                <div>
                  <h5 className="mb-3">Price</h5>
                  <div>
                    <div id="priceRange" className="mb-3"></div>
                    <small className="text-muted">Price:</small>{" "}
                    <span id="priceRange-value" className="small"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- col --> */}
          </div>
          <div className="col">
            {/* <!-- card --> */}
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-6">
                {/* <!-- content --> */}
                <div>
                  <h5 className="mb-3">Rating</h5>
                  <div>
                    <div className="form-check mb-2">
                      {/* <!-- input --> */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="ratingFive"
                      />
                      {/* <!-- rating --> */}
                      <label className="form-check-label" htmlFor="ratingFive">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning "></i>
                        <i className="bi bi-star-fill text-warning "></i>
                        <i className="bi bi-star-fill text-warning "></i>
                        <i className="bi bi-star-fill text-warning "></i>
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      {/* <!-- input --> */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="ratingFour"
                        checked
                      />
                      {/* <!-- rating --> */}
                      <label className="form-check-label" htmlFor="ratingFour">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning "></i>
                        <i className="bi bi-star-fill text-warning "></i>
                        <i className="bi bi-star-fill text-warning "></i>
                        <i className="bi bi-star text-warning"></i>
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      {/* <!-- input --> */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="ratingThree"
                      />
                      {/* <!-- rating --> */}
                      <label className="form-check-label" htmlFor="ratingThree">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning "></i>
                        <i className="bi bi-star-fill text-warning "></i>
                        <i className="bi bi-star text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      {/* <!-- input --> */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="ratingTwo"
                      />
                      {/* <!-- rating --> */}
                      <label className="form-check-label" htmlFor="ratingTwo">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      {/* <!-- input --> */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="ratingOne"
                      />
                      {/* <!-- rating --> */}
                      <label className="form-check-label" htmlFor="ratingOne">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
