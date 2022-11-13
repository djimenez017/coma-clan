import Container from "../Components/container";
import { Text } from "@nextui-org/react";

const about = () => {
  return (
    <Container>
      <Text
        h1
        weight={"normal"}
        size={"$4xl"}
        color="inherit"
        css={{
          margin: "10px auto",
          textAlign: "center",
        }}
      >
        About COMA
      </Text>
    </Container>
  );
};

export default about;
