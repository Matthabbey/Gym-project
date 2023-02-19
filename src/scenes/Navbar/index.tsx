import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/share/types";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-center";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  console.log();

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>

          <div className={`${flexBetween} w-full gap-16 `}>
            {/* LEFT SIDE */}
          <img src={Logo} alt="" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full `}>
                <div className={`${flexBetween} gap-8 text-sm `}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween}`}>
                  <p>Sign In</p>
                  <button>Become a Member</button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-400 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
