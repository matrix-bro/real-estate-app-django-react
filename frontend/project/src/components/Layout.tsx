import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}
const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
