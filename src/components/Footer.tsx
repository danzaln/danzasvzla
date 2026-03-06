const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8 text-primary-foreground">
      <div className="container text-center">
        <p className="font-display text-lg font-semibold">
          Liceo Nacional Juana Manaure de Garcia
        </p>
        <p className="mt-1 text-sm opacity-80">
          Rescate de las Danzas Tradicionales Venezolanas
        </p>
        <div className="mx-auto my-4 h-px w-16 bg-primary-foreground/30" />
        <p className="text-xs opacity-60">
          Proyecto académico — {year}
        </p>
        <p className="mt-1 text-xs opacity-60">
          Reyner Velasco · Oscary Padilla · Feliannys Alcalá · Roxelin Atacho · Astrid Bello
        </p>
      </div>
    </footer>
  );
};

export default Footer;
