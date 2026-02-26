'use client';

import styles from "./NovaTarefa.module.css";

import { useState } from 'react';

export default function NovaTarefa({ onAdicionar }: { onAdicionar: (tarefa: string) => void }) {
    const [tarefa, setTarefa] = useState('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!tarefa.trim()) return;
        onAdicionar(tarefa);
        setTarefa('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                placeholder="Digite uma nova tarefa..."
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
                className={styles.input}
            />
            <button
                type="submit"
                className={styles.botao}
            >
                Adicionar
            </button>
        </form>
    );
}