import Link from "next/link";
import Logo from "../public/eth.png";
import Image from "next/image";
import Head from "next/head";

const Navbar = (props) => {
  return (
    <nav>
      <div className="logo">
        {/* <h1>Ninja List</h1> */}
        <Image
          src={Logo}
          alt={"Brand logo"}
          width={128}
          height={77}
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <Link href={"/about"}>
        <a>About</a>
      </Link>
      <Link href={"/ninja"}>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
