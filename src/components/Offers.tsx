import offersBtns from "../data/Offers";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Offers = () => {
  return (
    <div>
      <div className="flex justify-evenly">
        {offersBtns.map((offers) => (
          <a href="#">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <img src={offers.img} alt="" className="w-[54px] h-[54px]" />
              <p className="text-gray-100">{offers.title}</p>
            </div>
          </a>
        ))}
        <a href="#">
            <div className="rounded-full w-[54px] h-[54px] flex justify-center items-center bg-gray-100"><MoreHorizIcon/></div>
        </a>
      </div>
    </div>
  );
};

export default Offers;
