import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/share/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/share/ActionButton";

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
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 px-[5%]`}>
          <div className={`${flexBetween} w-[30%]`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="" />
        </div>
        <div className={`flex justify-between mx-auto w-[70%]`}>


            {/* RIGHT SIDE */}
            {isAboveMediumScreen ? (
              <div className={`flex justify-between w-full `}>
                <div className={`${flexBetween} gap-8 text-sm w-[60%]`}>
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
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-400 p-2"
                onClick={() => setIsMenuToggled(false)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
      </div>

      {isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          {/* MENU ITEMS */}
          <div className="gap-18 ml-[33%] flex flex-col text-2xl">
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
              </div>
        </div>
      )}
    </nav>
  );
};

export default index;
