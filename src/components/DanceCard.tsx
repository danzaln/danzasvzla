import { Link } from "react-router-dom";

interface DanceCardProps {
  id: string;
  nombre: string;
  imagen_principal_url: string | null;
}

const DanceCard = ({ id, nombre, imagen_principal_url }: DanceCardProps) => {
  return (
    <Link
      to={`/danza/${id}`}
      className="group block overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imagen_principal_url || "/placeholder.svg"}
          alt={nombre}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-display text-lg font-semibold text-primary transition-colors group-hover:text-accent">
          {nombre}
        </h3>
      </div>
    </Link>
  );
};

export default DanceCard;
