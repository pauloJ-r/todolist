import { ITask } from "../../@types/Tasks";

interface ICardTasksProps {
    data: ITask;
    onDelete(data: ITask): void;
}

export type { ICardTasksProps };