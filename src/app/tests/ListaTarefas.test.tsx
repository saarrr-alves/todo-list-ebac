import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListaTarefas from "../components/ListaTarefas/ListaTarefas";

test("deve renderizar a lista de tarefas e chamar a função de remover ao clicar no botão", () => {
  const tarefas = [
    { id: 1, titulo: "Tarefa 1" },
    { id: 2, titulo: "Tarefa 2" },
  ];
  const mockRemover = jest.fn();
  render(<ListaTarefas tarefas={tarefas} onRemover={mockRemover} />);
  const tarefa1 = screen.getByText("Tarefa 1");
  const tarefa2 = screen.getByText("Tarefa 2");
  expect(tarefa1).toBeInTheDocument();
  expect(tarefa2).toBeInTheDocument();
  const botoesRemover = screen.getAllByRole("button", { name: /remover/i });
  expect(botoesRemover).toHaveLength(2);
  act(() => {
    botoesRemover[0].click();
  });
  expect(mockRemover).toHaveBeenCalledWith(1);
});

test("deve exibir mensagem quando a lista de tarefas estiver vazia", () => {
  const mockRemover = jest.fn();
  render(<ListaTarefas tarefas={[]} onRemover={mockRemover} />);
  const mensagemVazia = screen.getByText("Nenhuma tarefa encontrada.");
  expect(mensagemVazia).toBeInTheDocument();
});
