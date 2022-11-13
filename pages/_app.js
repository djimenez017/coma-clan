import "../styles/globals.css";

import { createTheme, NextUIProvider } from "@nextui-org/react";
import NavigationBar from "../Components/Navigation/Nav";
import Footer from "../Components/Footer";

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "#610b07",
      primaryLightHover: "$red600",
      primaryLightActive: "$green400",
      primaryLightContrast: "$gray900",
      primary: "$gray900",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#610b07",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={theme}>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}

export default MyApp;
