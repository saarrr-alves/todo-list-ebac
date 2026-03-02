import style from "./ListaTarefas.module.css";

interface Tarefa {
  id: number;
  titulo: string;
}

interface ListaTarefasProps {
  tarefas: Tarefa[];
  onRemover: (id: number) => void;
}

export default function ListaTarefas({
  tarefas,
  onRemover,
}: ListaTarefasProps) {
  // A função interna apenas executa a prop recebida
  const handleRemover = (id: number) => {
    onRemover(id);
  };

  return (
    <ul className={style.lista}>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className={style.item}>
          <span>{tarefa.titulo}</span>
          <button
            onClick={() => handleRemover(tarefa.id)}
            className={style.botaoRemover}
          >
            Remover
          </button>
        </li>
      ))}

      {tarefas.length === 0 && (
        <p className={style.vazia}>Nenhuma tarefa encontrada.</p>
      )}
    </ul>
  );
}
