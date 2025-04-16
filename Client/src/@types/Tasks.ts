import { ITags } from "./Tags";

interface ITask {
    id: number;
    title: string;
    status: string;
    priority: number;
    description: string;
    tags: ITags[];
}

export type { ITask };