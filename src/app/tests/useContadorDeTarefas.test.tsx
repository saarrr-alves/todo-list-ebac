import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

test("deve retornar a quantidade correta de tarefas iniciais e atualizar após rerender", () => {
  // 1. Renderiza o hook com as props iniciais
  const { result, rerender } = renderHook(
    ({ tarefas }) => useContadorDeTarefas(tarefas),
    {
      initialProps: { tarefas: ["Tarefa 1", "Tarefa 2"] },
    },
  );

  // 2. Verifica o valor inicial
  expect(result.current).toBe(2);

  // 3. Atualiza as props (simulando uma nova tarefa adicionada à lista)
  rerender({ tarefas: ["Tarefa 1", "Tarefa 2", "Tarefa 3"] });

  // 4. Verifica se o contador atualizou corretamente
  expect(result.current).toBe(3);
});
