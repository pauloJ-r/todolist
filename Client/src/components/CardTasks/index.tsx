import styles from "./styles.module.css";
import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";
import { Link } from "react-router-dom";
import { ICardTasksProps } from "./types";

export default function CardTasks({ tasks, onDelete }: ICardTasksProps) {
    return (
        <div className={styles.Cardtasks}>
        <div>
          <div>
            <strong>{tasks.title}</strong>{" "}
            {tasks.tags_name && <small>{tasks.tags_name}</small>}
          </div>
          {tasks.description && <span>{tasks.description}</span>}
          {tasks.status && <span>{tasks.status}</span>}
        </div>
        <div>
          <Link to={`/tasks/${tasks.id}`}>
            <img src={edit} alt="Editar" />
          </Link>
          <img src={trash} alt="Excluir" onClick={() => onDelete(tasks)} />
        </div>
      </div>
    );
}