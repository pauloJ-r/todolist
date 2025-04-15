import styles from "./styles.module.css";
import trash from "../../assets/icons/trash.svg";
import edit from "../../assets/icons/edit.svg";
import { Link } from "react-router-dom";
import { ICardTasksProps } from "./types";

export default function CardTasks({ data, onDelete }: ICardTasksProps) {
    return (
        <div className={styles.Cardtasks}>
        <div>
          <div>
            <strong>{data.title}</strong>{" "}
            {data.tags_name && <small>{data.tags_name}</small>}
          </div>
          {data.description && <span>{data.description}</span>}
          {data.status && <span>{data.status}</span>}
        </div>
        <div>
          <Link to={`/tasks/${data.id}`}>
            <img src={edit} alt="Editar" />
          </Link>
          <img src={trash} alt="Excluir" onClick={() => onDelete(data)} />
        </div>
      </div>
    );
}