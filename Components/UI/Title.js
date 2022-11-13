import React from "react";
import { Text } from "@nextui-org/react";

const Title = ({ children }) => {
  return (
    <Text
      weight={"normal"}
      size={"$3xl"}
      color="inherit"
      css={{
        margin: 0,
      }}
    >
      {children}
    </Text>
  );
};

export default Title;
