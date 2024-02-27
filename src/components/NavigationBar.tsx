import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import DropDownComponent from "./DropDownComponent";
const NavigationBar = () => {
  const navigationBarList = [
    { id: 1, title: "Amazings", icon: <AccessibilityOutlinedIcon /> },
    { id: 2, title: "Super Market", icon: <StorefrontOutlinedIcon /> },
    { id: 3, title: "Gift Card", icon: <CardGiftcardOutlinedIcon /> },
    { id: 4, title: "Most Seller", icon: <LocalFireDepartmentOutlinedIcon /> },
    { id: 5, title: "Offers", icon: <LocalOfferOutlinedIcon /> },
  ];
  return (
    <div className="divide-y">
      <div className="pt-8">
        <ul className="list-none">
          <div className="flex justify-between">
            <div className={`flex gap-10`}>
            <a className="text-gray-100 transition delay-90 hover:text-orange-800 text-gray-100"><DropDownComponent/></a>
              {navigationBarList.map((item) => (
                <a
                  href="#"
                  className="transition delay-90 hover:text-orange-800 text-gray-100"
                >
                  <li key={item.id}>
                    {item.icon}
                    <span className="align-middle">{item.title}</span>
                  </li>
                </a>
              ))}
            </div>
            <div>
              <a href="#" className="transition delay-90 hover:text-orange-800">
                <li className="text-gray-100 transition delay-90 hover:text-orange-800 text-gray-100">
                  <FmdGoodOutlinedIcon />
                  <span className="align-middle">Choose Your City</span>
                </li>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
