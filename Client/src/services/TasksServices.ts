import { ITags } from "../@types/Tags";
import api from "../configs/api";

export async function getTags(): Promise<ITags[]> {
    const response = await api.get("/tags");
    return response.data;
}
export async function createTags(name: string, color: string): Promise<ITags> {
    const response = await api.post("/tags", { name, color });
    return response.data;
}

export async function updateTags(id: number, name: string, color: string): Promise<ITags> {
    const response = await api.put(`/tags/${id}`, { name, color });
    return response.data;
}

export async function deleteTags(id: number): Promise<void> {
    await api.delete(`/tags/${id}`);
}