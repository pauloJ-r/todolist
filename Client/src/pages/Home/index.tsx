import { useEffect, useState } from "react";
import { getTasks } from "../../services/TasksServices";
import CardTasks from "../../components/CardTasks";
import { ICardTasksProps } from "../../components/CardTasks/types";

export default function Home() {
  const [tasks, setTasks] = useState<ICardTasksProps["data"][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await getTasks();
        setTasks(response);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, []);

  const handleDelete = (taskToDelete: ICardTasksProps["data"]) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      {loading && <span>Carregando...</span>}
      {!loading && tasks.length === 0 && <span>Nenhuma tarefa encontrada.</span>}
      {tasks.map((task) => (
        <CardTasks key={task.id} data={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}
