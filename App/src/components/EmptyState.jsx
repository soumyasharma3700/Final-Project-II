import { Film } from "lucide-react";

function EmptyState({ title, text }) {
  return (
    <div className="empty-state">
      <div className="empty-illustration">
        <Film size={52} />
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default EmptyState;