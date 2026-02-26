import {} from "@testing-library/react";
import { useContadorDeTarefas } from "./useContadorDeTarefas";

test("useContadorDeTarefas retorna a contagem correta", () => {
  const tarefas = ["Tarefa 1", "Tarefa 2", "Tarefa 3"];
  const contagem = useContadorDeTarefas(tarefas);
  expect(contagem).toBe(3);
});