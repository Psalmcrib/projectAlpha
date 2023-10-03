import Main from "./main";
import ModalOne from "./modal-1";
import LocationModal from "./locationModal";
import ModalThree from "./modal-3";
import ShopCart from "./shop-cart";
const Home = () => {
  return (
    <>
      <ModalOne />
      <ShopCart />
      <LocationModal />
      <Main />
      <ModalThree />
    </>
  );
};
export default Home;
