import { Link } from "react-router-dom";
import "../index.css";

export const Navbar = () => {

  function handleClick() {
    const menu = document.querySelector('.mobile_ul');
    menu.classList.toggle('active');
  }

  return (
    <nav className="bg-gr1 text-white h-[80px] mobile_menu">
      <ul className="flex justify-between items-center w-[100%] sm:px-[50px] px-[20px] py-[15px] mobile_menu_ul">
        <div>
          <li>
            <Link to="/" className="flex gap-2 items-center z-20 relative">
              <img src="/img/svg/Logo.svg" alt="Logo" className="h-[25px]"/>
              <span className="text-[20px]">DEEPNFT</span>
            </Link>
          </li>
        </div>
        <div className="font-mono flex gap-[40px] items-center text-[16px]  mobile_ul z-10 max2:drop-shadow-glow">
          <li className="hover:border-b w-fit">
            <Link to="/marketplace">MarketPlace</Link>
          </li>
          <li className="hover:border-b w-fit">
            <Link to="/Rankings">Rankings</Link>
          </li>
          <li className="hover:border-b w-fit">
            <Link to="/Wallet">Connect Wallet</Link>
          </li>
          <li className="hover:border-b w-fit md:hidden text-[#A259FF]">
            <Link to="/signup">Signup</Link>
          </li>
          <Link to="/signup" className="flex gap-2 px-[15px] py-[8px] bg-[#A259FF] hover:bg-[#a665f9] rounded-[10px] items-center justify-center max2:hidden shadow-lg shadow-indigo-500/50">
            <img src="/img/svg/user.svg" alt="user" className="h-[18px]"/>
            <span>Sign Up</span>
          </Link>
        </div>
        <div className="hamburger z-20 md:hidden" onClick={handleClick}>
          <img src="/img/svg/hamburger.svg" alt="hamburger" className="h-[30px]"/>
        </div>
      </ul>
    </nav>
  );
};
