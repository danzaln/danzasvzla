
const CaracSection = () => {
  return (
   <section className="bg-muted py-12 md:py-16">
  <div className="container">
    
    <div className="text-center mb-10">
      <h2 className="font-display text-3xl font-bold text-primary">
        Información del Proyecto
      </h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      
      {/* IMPORTANCIA */}
      <div className="rounded-xl bg-background p-6 shadow-md">
        <h3 className="text-xl font-bold text-primary mb-4">
          📌 Importancia
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Esta aplicación tiene como objetivo rescatar y promover las danzas 
          tradicionales venezolanas, fortaleciendo la identidad cultural dentro 
          del Liceo Nacional Juana Manaure de García.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          A través de esta plataforma digital, los estudiantes pueden conocer 
          información detallada sobre cada danza tradicional, su historia, 
          vestimenta y características principales.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Está dirigida especialmente a los estudiantes de 1er y 2do año 
          (A, B y C), fomentando el aprendizaje cultural de forma dinámica y accesible.
        </p>
      </div>

      {/* BENEFICIOS */}
      <div className="rounded-xl bg-background p-6 shadow-md">
        <h3 className="text-xl font-bold text-primary mb-4">
          🎯 Beneficios
        </h3>
        <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside">
          <li>Acceso rápido y organizado a información cultural.</li>
          <li>Fomenta el aprendizaje autónomo.</li>
          <li>Apoya actividades académicas relacionadas con cultura.</li>
          <li>Motiva el interés por el folklore venezolano.</li>
          <li>Integra la tecnología como herramienta educativa.</li>
        </ul>
      </div>

      {/* VENTAJAS */}
      <div className="rounded-xl bg-background p-6 shadow-md">
        <h3 className="text-xl font-bold text-primary mb-4">
          ✅ Ventajas
        </h3>
        <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside">
          <li>Permite a estudiantes aprender sobre danzas tradicionales.</li>
          <li>Sirve como herramienta de investigación escolar.</li>
          <li>Contribuye al rescate cultural venezolano.</li>
          <li>Mantiene vivas las tradiciones en la generación actual.</li>
          <li>Disponible desde cualquier dispositivo con internet.</li>
        </ul>
      </div>

    </div>
  </div>
  <div className="container">
    
    <div className="text-center mb-14">
      <h2 className="font-display text-4xl font-bold text-primary"><br></br><br></br>
        Calendario Cultural de las Danzas Tradicionales
      </h2>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        A lo largo del año, Venezuela celebra sus tradiciones a través de danzas 
        que combinan fe, identidad, historia y celebración.
      </p>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-accent" />
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {/* PRIMER TRIMESTRE */}
      <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-yellow-500">
        <h3 className="text-2xl font-bold text-yellow-600 mb-6">
          🌟 Devoción y Carnaval (1er trimestre)
        </h3>
        <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <li><strong>Enero:</strong> Paradura del Niño (Andes), celebrada frente al pesebre con violines y aguinaldos.</li>
          <li><strong>Febrero:</strong> Carnaval de El Callao (Bolívar), con madamas y calipso vibrante.</li>
          <li><strong>Febrero 2:</strong> Vasallos de la Candelaria (Mérida), danza de fe y fertilidad.</li>
        </ul>
      </div>

      {/* SEGUNDO TRIMESTRE */}
      <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-purple-600">
        <h3 className="text-2xl font-bold text-purple-700 mb-6">
          ✝ Tradición y Corpus Christi (2do trimestre)
        </h3>
        <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <li><strong>Semana Santa:</strong> Nazareno de San Pablo con procesiones solemnes.</li>
          <li><strong>Mayo:</strong> Cruz de Mayo, con galerón y décimas tradicionales.</li>
          <li><strong>Corpus Christi:</strong> Diablos Danzantes, Patrimonio de la Humanidad.</li>
        </ul>
      </div>

      {/* TERCER TRIMESTRE */}
      <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-red-600">
        <h3 className="text-2xl font-bold text-red-600 mb-6">
          🥁 El Tambor y la Identidad (3er trimestre)
        </h3>
        <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <li><strong>Junio 24:</strong> San Juan Bautista, repique afrovenezolano.</li>
          <li><strong>Junio 29:</strong> Parranda de San Pedro (Guatire y Guarenas).</li>
          <li><strong>Agosto:</strong> Baile de Las Turas, tradición indígena.</li>
        </ul>
      </div>

      {/* CUARTO TRIMESTRE */}
      <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-green-600">
        <h3 className="text-2xl font-bold text-green-700 mb-6">
          🎄 Resistencia y Navidad (4to trimestre)
        </h3>
        <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <li><strong>Octubre 12:</strong> María Lionza (Sorte), rituales místicos.</li>
          <li><strong>Noviembre 18:</strong> Feria de la Chinita (Zulia) con gaita tradicional.</li>
          <li><strong>Diciembre:</strong> Locos de La Vela, Zaragozas y el Joropo como rey de las fiestas.</li>
        </ul>
      </div>

    </div>
  </div>
</section>

  );
};

export default CaracSection;
