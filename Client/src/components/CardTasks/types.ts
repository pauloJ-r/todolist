import { ITask } from "../../@types/Tasks";

interface ICardTasksProps {
    tasks: ITask;
    onDelete(tasks: ITask): void;
}

export type { ICardTasksProps };