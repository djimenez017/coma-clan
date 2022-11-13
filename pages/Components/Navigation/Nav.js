import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.js";

export default function App() {
  const navItems = [
    { title: "Home", url: "/" },
    { title: "Members", url: "/members" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text
            h1
            weight={"normal"}
            size={"$3xl"}
            color="inherit"
            css={{
              margin: 0,
            }}
          >
            COMA Clan
          </Text>
        </Navbar.Brand>

        <Navbar.Content enableCursorHighlight variant="underline" hideIn="sm">
          {navItems.map((item, index) => (
            <Navbar.Link
              key={index}
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.url}
            >
              {item.title}
            </Navbar.Link>
          ))}
        </Navbar.Content>

        <Navbar.Content enableCursorHighlight variant="underline" showIn="sm">
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Content>

        <Navbar.Collapse>
          {navItems.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.url}
              >
                {item.title}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
