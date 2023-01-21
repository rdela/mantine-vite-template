import { Text, Button, Stack, Title } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Stack align="center" mt={50}>
        <Text size="xl" weight={500}>
          Welcome to Mantine!
        </Text>
        <Title size={12} align="center">
          H1 size 12?
        </Title>
        <Title size="1rem" align="center">
          H1 size 1rem?
        </Title>
        <Title size="h1" order={2} align="right">
          H2 size h1?
        </Title>
        <Title
          variant="gradient"
          gradient={{ deg: 30, from: "cornflowerblue", to: "palegreen" }}
          order={2}
        >
          H2 gradient?
        </Title>
        <Button>Click the button</Button>
      </Stack>
    </ThemeProvider>
  );
}
