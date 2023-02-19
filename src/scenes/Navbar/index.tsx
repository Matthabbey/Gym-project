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
      
    </nav>
  );
};

export default index;
