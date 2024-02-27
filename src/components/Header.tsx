import logo from "../assets/digikalalogo.svg";
import BuyBtnComponent from "./BuyBtnComponent";
import SearchComponent from "./SearchComponent";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-6  ">
        <img src={logo} alt="" />
        <SearchComponent />
      </div>
      <div className="flex items-center gap-3">
        <BuyBtnComponent/>
        <span>|</span>
        <button><span className="text-lg"><ShoppingCartOutlinedIcon fontSize="large"/></span></button>
      </div>
    </div>
  );
};

export default Header;
