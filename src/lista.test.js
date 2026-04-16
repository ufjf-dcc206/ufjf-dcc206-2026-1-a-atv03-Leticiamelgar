import { expect, it } from "vitest";
import { getLista, iniciaLista, limpaLista, adicionarItem } from "./lista";

it("deve ter zero elementos após limpar a lista", () => {
  iniciaLista();
  const lista1 = getLista();
  expect(lista1.length).toBe(3);
  limpaLista();
  const lista2 = getLista();
  expect(lista2.length).toBe(0);
});

it("deve ter elementos iniciais", () => {
  iniciaLista();
  const lista = getLista();
  expect(lista.length).toBe(3);
});

it("alterar a lista retornada, não pode mexer na do módulo", () => {
  iniciaLista();
  const lista1 = getLista();
  expect(lista1.length).toBe(3);
  lista1.push("quatro");
  const lista2 = getLista();
  expect(lista2.length).toBe(3);
});

it("Adicionar nome na lista deve aumentar o total", () => {
  iniciaLista();
  const lista1 = getLista();
  expect(lista1.length).toBe(3);
  adicionarItem("quatro");
  const lista2 = getLista();
  expect(lista2.length).toBe(4);
  expect(lista2[3]).toBe("quatro");
});

