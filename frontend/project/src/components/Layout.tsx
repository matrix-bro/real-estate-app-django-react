import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}
const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="mt-[76px] md:mt-[84px]">{props.children}</div>
    </>
  );
};

export default Layout;
