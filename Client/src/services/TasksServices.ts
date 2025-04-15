import { ITask } from "../@types/Tasks";
import api from "../configs/api";

export async function getTasks(): Promise<ITask[]> {
    const response = await api.get("/tasks");
    return response.data;
}

export async function createTasks(title: string, status: string, priority: number, description: string, tags_id: number): Promise<ITask> {
    const response = await api.post("/tasks", { title, status, priority, description, tags_id });
    return response.data;
}

export async function updateTasks(id: number, title: string, status: string, priority: number, description: string, tags_id: number): Promise<ITask> {
    const response = await api.put(`/tasks/${id}`, { title, status, priority, description, tags_id });
    return response.data;
}

export async function deleteTasks(id: number): Promise<void> {
    await api.delete(`/tasks/${id}`);
}   