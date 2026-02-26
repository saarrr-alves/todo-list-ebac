import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

test("Página Principal (Home)", () => {
    render(<Home />);
    const titulo = screen.getByText("Gerenciador de Tarefas");
    expect(titulo).toBeInTheDocument();
});

test("Contador de tarefas inicia com 2", () => {
    render(<Home />);
    const contador = screen.getByTestId("contador");
    expect(contador).toHaveTextContent("2");
});

test("Lista de tarefas exibe as tarefas iniciais", () => {
    render(<Home />);
    const tarefa1 = screen.getByText("Estudar Next.js 15");
    const tarefa2 = screen.getByText("Aprender Jest e Testing Library");
    expect(tarefa1).toBeInTheDocument();
    expect(tarefa2).toBeInTheDocument();
});

test("Footer exibe os créditos", () => {
    render(<Home />);
    const creditos = screen.getByText("Desenvolvido por Sara Alves");
    expect(creditos).toBeInTheDocument();
});