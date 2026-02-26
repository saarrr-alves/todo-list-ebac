import style from "./ListaTarefas.module.css";

interface Tarefa {
  id: number;
  titulo: string;
}

interface ListaTarefasProps {
  tarefas: Tarefa[];
}

export default function ListaTarefas({ tarefas }: ListaTarefasProps) {
  return (
    <ul className={style.lista}>
      {tarefas.map((tarefa) => (
        <li 
          key={tarefa.id} 
          className={style.item}
        >
          <span>{tarefa.titulo}</span>
        </li>
      ))}
      {tarefas.length === 0 && (
        <p className={style.vazia}>Nenhuma tarefa encontrada.</p>
      )}
    </ul>
  );
};