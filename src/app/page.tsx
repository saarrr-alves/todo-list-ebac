"use client";

import ListaTarefas from "./components/ListaTarefas/ListaTarefas";

// import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import NovaTarefa from "./components/NovaTarefa/NovaTarefa";
import { useContadorDeTarefas } from "./hook/useContadorDeTarefas";
import Footer from "./components/Footer/Footer";

export default function Home() {
  // Simulando dados iniciais que viriam de uma "API" no Server Component
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Estudar Next.js 15" },
    { id: 2, titulo: "Aprender Jest e Testing Library" }
  ]);

  const total = useContadorDeTarefas(tarefas.map(t => t.titulo));

  const adicionarTarefa = (titulo: string) => {
    const nova = { id: Date.now(), titulo };
    setTarefas([...tarefas, nova]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.titulo}>Gerenciador de Tarefas</h1>
          <div className={styles.contador}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icone} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <p>
              Você tem <span className={styles.numeroContador} data-testid="contador">{total}</span> tarefas pendentes.
            </p>
          </div>
        </header>

        <main className={styles.main}>
          <NovaTarefa onAdicionar={adicionarTarefa} />
          <div className={styles.listaContainer}>
            <h2 className={styles.tituloLista}>Sua Lista</h2>
            <ListaTarefas tarefas={tarefas} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
