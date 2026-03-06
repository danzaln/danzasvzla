import grupoAutores from "@/assets/grupo-autores.jpeg";
//import grupoAutores from "@/assets/equipo.jpeg";

const autores = [
  "Reyner Velasco",
  "Oscary Padilla",
  "Feliannys Alcalá",
  "Roxelin Atacho",
  "Astrid Bello",
];

const AuthorsSection = () => {
  return (
    <section className="bg-muted py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <img
            src={grupoAutores}
            alt="Grupo de autores del proyecto"
            className="w-full max-w-sm rounded-lg object-cover shadow-lg md:w-1/2 lg:max-w-md"
          />
          <div className="w-full text-center md:text-left">
            <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
              Autores
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent md:mx-0" />
            <ul className="mt-6 space-y-2">
              {autores.map((nombre) => (
                <li
                  key={nombre}
                  className="font-body text-lg text-foreground"
                >
                  {nombre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;
