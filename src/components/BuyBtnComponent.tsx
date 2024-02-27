import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const BuyBtnComponent = () => {
  return (
    <div>
        <button className='transition delay-90 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            <span><ExitToAppIcon/></span>
            <span className='align-middle pl-1'>Sign in | Sign Up</span>
        </button>
    </div>
  );
};

export default BuyBtnComponent;
