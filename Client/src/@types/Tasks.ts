interface ITask {
    id: number;
    title: string;
    status: string;
    priority: number;
    description: string;
    tags_id: number;
    tags_name: string;
    tags_color: string;
}

export type { ITask };