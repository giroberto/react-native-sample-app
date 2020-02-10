import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Form, Input, SubmitButton } from "./styles";

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Add user"
        />
        <SubmitButton>
          <MaterialIcons name="add" size={20} color="#FFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: "Usuários"
};
