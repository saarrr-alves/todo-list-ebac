import { useState, useEffect } from "react";

export function useContadorDeTarefas(tarefas: string[]) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(tarefas.length);
  }, [tarefas]);

  return total;
}
