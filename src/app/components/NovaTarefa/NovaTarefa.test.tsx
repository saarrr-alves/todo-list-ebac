import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NovaTarefa from "./NovaTarefa";

test("Componente NovaTarefa", () => {
    const mockAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={mockAdicionar} />);

    const input = screen.getByPlaceholderText("Digite uma nova tarefa...");
    const button = screen.getByRole("button", { name: /adicionar/i });

    // Simula a digitação de uma nova tarefa
    fireEvent.change(input, { target: { value: "Nova Tarefa" } });
    fireEvent.click(button);

    expect(mockAdicionar).toHaveBeenCalledWith("Nova Tarefa");
    expect(input).toHaveValue("");
});