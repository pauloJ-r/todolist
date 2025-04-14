interface ITask {
    id: number;
    title: string;
    status: string;
    priority: number;
    description: string;
    tags_id: number;
}

export type { ITask };