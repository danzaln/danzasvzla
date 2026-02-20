import logoLiceo from "@/assets/logo-liceo.png";

const InstitutionalHeader = () => {
  return (
    <header className="bg-primary py-6">
      <div className="container flex flex-col items-center gap-4 md:flex-row md:gap-6">
        <img
          src={logoLiceo}
          alt="Logo del Liceo Nacional Juana Manaure"
          className="h-20 w-20 rounded-full bg-primary-foreground/10 object-contain p-1 md:h-24 md:w-24"
        />
        <h2 className="text-center font-display text-xl font-bold text-primary-foreground md:text-left md:text-2xl lg:text-3xl">
          Liceo Nacional Juana Manaure de Garcia
        </h2>
      </div>
    </header>
  );
};

export default InstitutionalHeader;
