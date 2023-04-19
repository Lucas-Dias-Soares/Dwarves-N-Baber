"use client";
import { useState } from "react";
import Container from "../components/container/styled";
import FormCard from "../components/form/styles";
import TitleCenter from "../components/title/styles";
import InputA from "../components/input/styles";
import ButtonA from "../components/button/styles";
import PAbsolute from "../components/absolute/styles";
import PRelative from "../components/relative/styles";

function LoginPage() {
  const [section, setSection] = useState<string>("login");
  console.log(section);
  return (
    <Container>
      {section === "login" ? (
        <>
          <div>
            <FormCard>
              <TitleCenter>Entre em sua conta</TitleCenter>
              <label htmlFor="email"></label>
              <InputA type="email" placeholder="Digite seu email" id="email" />
              <label htmlFor="senha"></label>
              <InputA
                type="password"
                placeholder="Digite sua senha"
                id="senha"
              />
              <ButtonA>Entrar</ButtonA>
              <PRelative>
                <PAbsolute onClick={() => setSection("register")}>
                  Ainda não possui uma conta?
                </PAbsolute>
              </PRelative>
            </FormCard>
          </div>
        </>
      ) : (
        <>
          <div>
            <FormCard>
              <TitleCenter>Crie a sua conta</TitleCenter>
              <label htmlFor="email"></label>
              <InputA type="email" placeholder="Digite seu email" id="email" />
              <label htmlFor="email"></label>
              <InputA
                type="email"
                placeholder="Digite seu email novamente"
                id="email"
              />
              <label htmlFor="senha"></label>
              <InputA
                type="password"
                placeholder="Digite sua senha"
                id="senha"
              />
              <ButtonA>Registrar-se</ButtonA>
              <PRelative>
                <PAbsolute onClick={() => setSection("login")}>
                  Conectar-se
                </PAbsolute>
              </PRelative>
            </FormCard>
          </div>
        </>
      )}
    </Container>
  );
}
export default LoginPage;
