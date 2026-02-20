import heroDanzas from "@/assets/hero-danzas.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden md:min-h-[60vh]">
      <img
        src={heroDanzas}
        alt="Danzas tradicionales venezolanas"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container px-4 py-16 text-center">
        <h1 className="animate-fade-in-up font-display text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Rescate de las Danzas
          <br />
          Tradicionales Venezolanas
        </h1>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-secondary" />
      </div>
    </section>
  );
};

export default HeroSection;
