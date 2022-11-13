//import { Image } from "@nextui-org/react";
import coma from "../assets/coma-logo.png";
import Image from "next/image";

export default function Hero() {
  return <Image src={coma} alt="Default Image" width={"auto"} height={500} />;
}
