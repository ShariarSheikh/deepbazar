import BottomComp from "./components/BottomComp";
import TopComp from "./components/TopComp";
import JoinBox from "../../common/JoinBox";
import { useSelector } from "react-redux";
import AddedPDCart from "../../common/AddedPDCart";
import { loginState } from "../../../redux/loginSlice/loginSlice";

const Header = () => {
  const { userData } = useSelector(loginState);
  return (
    <header className="max-w-[1366px] w-full m-auto">
      <TopComp />
      <BottomComp />
      <AddedPDCart />
      {!userData.user?.name && <JoinBox />}
    </header>
  );
};

export default Header;
