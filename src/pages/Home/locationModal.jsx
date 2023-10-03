import { useState } from "react";

const locations = [
  {
    id: 1,
    name: "Abuja",
    price: "Min:$20",
  },
  {
    id: 2,
    name: "Anambra",
    price: "Min:$30",
  },
  {
    id: 3,
    name: "Delta",
    price: "Min:$50",
  },
  {
    id: 4,
    name: "Enugu",
    price: "Min:$29",
  },
  {
    id: 5,
    name: "Kano",
    price: "Min:$80",
  },
  {
    id: 6,
    name: "Kwara",
    price: "Min:$90",
  },
  {
    id: 7,
    name: "Lagos",
    price: "Min:$50",
  },
  {
    id: 8,
    name: "Ondo",
    price: "Min:$29",
  },
  {
    id: 9,
    name: "Oyo",
    price: "Min:$80",
  },
  {
    id: 10,
    name: "Rivers",
    price: "Min:$60",
  },
  {
    id: 11,
    name: "Sokoto",
    price: "Min:$30",
  },
];

const LocationModal = () => {
  const [searchValue, setSearchValue] = useState("");
  const controlSerach = (e) => {
    setSearchValue(e.target.value);
  };
  const filterLocation = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchValue) ||
      location.name.includes(searchValue)
  );

  const deliveryLocation =
    filterLocation.length === 0 ? locations : filterLocation;
  return (
    <div
      className="modal fade"
      id="locationModal"
      tabIndex="-1"
      aria-labelledby="locationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-6">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5 className="mb-1" id="locationModalLabel">
                  Choose your Delivery Location
                </h5>
                <p className="mb-0 small">
                  Enter your address, and we will specify the offer in your
                  area.
                </p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="my-5">
              <input
                type="search"
                className="form-control"
                placeholder="Search your area"
                onChange={controlSerach}
                value={searchValue}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">Select Location</h6>
              <a
                href="#"
                className="btn btn-outline-gray-400 text-muted btn-sm"
              >
                Clear All
              </a>
            </div>
            <div>
              <div
                data-simplebar
                style={{ height: "300px", overflowY: "auto" }}
              >
                <div className="list-group list-group-flush">
                  {deliveryLocation.map((location) => (
                    <a
                      href="#"
                      key={location.id}
                      className="list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action"
                    >
                      <span>{location.name}</span>
                      <span>{location.price}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
