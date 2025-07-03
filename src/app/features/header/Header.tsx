import { tabList } from "@/types/types";
import { useTab } from "@/context/TabContext";
import { HeaderCommonType } from "@/types/componentType";
import NavList from "./NavList";
import HeaderButton from "./HeaderButton";
import ChangingColor from "./ChangingColor";

const Header = ({ color, icon: Icon, title }: HeaderCommonType) => {
  const [tab, setTab] = useTab()!;

  return (
    <header
      className={`fixed top-0 w-screen md:w-[768px] h-[130px] sm:h-[149px] px-6 sm:px-8 py-6 sm:py-8 border-${color} border-b-1 shadow bg-white flex items-start justify-between`}
    >
      <div>
        <div className="flex items-center gap-4 font-bold text-2xl ">
          <Icon className={`text-${color}`} />
          <h1>{title}</h1>
        </div>

        <div className="mt-4 space-x-2">
          {tabList.map((el) => {
            return (
              <HeaderButton
                key={el}
                btnName={el}
                onClick={() => setTab(el)}
                tab={tab}
                color={color}
              />
            );
          })}
        </div>
      </div>

      <nav className="text-right">
        <NavList title={title} />

        <ChangingColor />
      </nav>
    </header>
  );
};

export default Header;
