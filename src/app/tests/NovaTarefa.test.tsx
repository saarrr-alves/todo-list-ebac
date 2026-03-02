import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NovaTarefa from "../components/NovaTarefa/NovaTarefa";

test("deve atualizar o input e chamar a função de adicionar ao submeter o formulário", () => {
  const mockAdicionar = jest.fn();
  render(<NovaTarefa onAdicionar={mockAdicionar} />);

  const input = screen.getByPlaceholderText("Digite uma nova tarefa...");
  const botao = screen.getByRole("button", { name: /adicionar/i });

  fireEvent.change(input, { target: { value: "Nova Tarefa" } });
  fireEvent.click(botao);
  expect(mockAdicionar).toHaveBeenCalledWith("Nova Tarefa");
  expect(input).toHaveValue("");

  expect(botao).toBeInTheDocument();
});
