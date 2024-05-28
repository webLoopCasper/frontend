import Image from "next/image";
import Burger from "./Burger";

export default function Header({ data }) {
  console.log(data);
  return (
    <header className="z-20 border-b border-softgrey">
      <div className="flex flex-wrap content-center justify-between h-16 max-w-screen-lg px-4 mx-auto sm:px-12">
        <a href={"Logo"}>Logo</a>
        <div className="flex">
          <a className="flex border-r border-softgrey" href={"Kontakt"}>
            Kontakt
            <Image src="./arrow-up-right.svg" width={20} height={20} />
          </a>
          <Burger />
        </div>
      </div>
    </header>
  );
}
