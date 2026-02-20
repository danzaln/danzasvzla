import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase"

import DanceCard from "./DanceCard";

const DancesGrid = () => {
  const { data: danzas, isLoading } = useQuery({
    queryKey: ["danzas"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("danzas")
        .select("id, nombre, imagen_principal_url")
        .order("created_at");
      if (error) throw error;
      return data;
    },
  });

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-center font-display text-2xl font-bold text-primary md:text-3xl">
          Danzas Tradicionales
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-secondary" />

        {isLoading ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] animate-pulse rounded-lg bg-muted"
              />
            ))}
          </div>
        ) : danzas && danzas.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {danzas.map((danza) => (
              <DanceCard key={danza.id} {...danza} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-muted-foreground">
            No hay danzas registradas aún.
          </p>
        )}
      </div>
    </section>
  );
};

export default DancesGrid;
