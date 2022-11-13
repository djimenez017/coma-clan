//import { Image } from "@nextui-org/react";
//import Coma from "../../assets/coma-logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="../../assets/coma-logo.png"
      alt="Default Image"
      width={500}
      height={500}
    />
  );
}
