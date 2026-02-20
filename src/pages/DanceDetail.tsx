import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase"
import { ArrowLeft, ChevronLeft, ChevronRight, Music, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/InstitutionalHeader";

const DanceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: danza, isLoading } = useQuery({
    queryKey: ["danza", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("danzas")
        .select("*")
        .eq("id", id!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  const { data: allDanzas } = useQuery({
    queryKey: ["danzas"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("danzas")
        .select("id, nombre")
        .order("created_at");
      if (error) throw error;
      return data;
    },
  });

  const currentIndex = allDanzas?.findIndex((d) => d.id === id) ?? -1;
  const prevDanza = currentIndex > 0 ? allDanzas![currentIndex - 1] : null;
  const nextDanza =
    allDanzas && currentIndex < allDanzas.length - 1
      ? allDanzas[currentIndex + 1]
      : null;

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
    );
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!danza) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-lg text-muted-foreground">Danza no encontrada</p>
        <Button onClick={() => navigate("/")} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
            <Header />

      {/* Hero image */}
      <div className="relative h-64 overflow-hidden sm:h-80 md:h-96">
        <img
          src={danza.imagen_principal_url || "/placeholder.svg"}
          alt={danza.nombre}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container">
            <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              {danza.nombre}
            </h1>
            <p className="mt-2 text-lg text-primary-foreground/80">
              {danza.estado_origen}
            </p>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="container mt-6">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          size="sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Button>
      </div>

      {/* Content */}
      <main className="container flex-1 py-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {/* Historia */}
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">Importancia</h2>
            <div className="mt-1 h-1 w-12 rounded-full bg-accent" />
            <p className="mt-4 whitespace-pre-line font-body leading-relaxed text-foreground">
              {danza.historia}
            </p>
          </section>

          {/* Descripción */}
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">Origen</h2>
            <div className="mt-1 h-1 w-12 rounded-full bg-secondary" />
            <p className="mt-4 whitespace-pre-line font-body leading-relaxed text-foreground">
              {danza.descripcion}
            </p>
          </section>

          {/* Vestimenta */}
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">Vestimenta</h2>
            <div className="mt-1 h-1 w-12 rounded-full bg-accent" />
            <div className="mt-4 flex flex-col gap-6 md:flex-row">
              {danza.vestimenta_imagen_url && (
                <img
                  src={danza.vestimenta_imagen_url}
                  alt={`Vestimenta de ${danza.nombre}`}
                  className="w-full rounded-lg object-cover shadow-md md:w-1/2"
                />
              )}
              <p className="whitespace-pre-line font-body leading-relaxed text-foreground">
                {danza.vestimenta_descripcion}
              </p>
            </div>
          </section>

          {/* Música 
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">Música</h2>
            <div className="mt-1 h-1 w-12 rounded-full bg-secondary" />
            <p className="mt-4 whitespace-pre-line font-body leading-relaxed text-foreground">
              {danza.musica_descripcion}
            </p>
            {danza.audio_url && (
              <a
                href={danza.audio_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 font-body text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Music className="h-4 w-4" />
                Escuchar audio
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </section>
*/}
          {/* Video */}
          {danza.youtube_url && (
            <section>
              <h2 className="font-display text-2xl font-bold text-primary">Video</h2>
              <div className="mt-1 h-1 w-12 rounded-full bg-accent" />
              <div className="mt-4 aspect-video overflow-hidden rounded-lg shadow-md">
                <iframe
                  src={getYouTubeEmbedUrl(danza.youtube_url) || ""}
                  title={`Video de ${danza.nombre}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </section>
          )}

          {/* Navigation */}
          <nav className="flex items-center justify-between border-t border-border pt-6">
            {prevDanza ? (
              <Link
                to={`/danza/${prevDanza.id}`}
                className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                <ChevronLeft className="h-4 w-4" />
                {prevDanza.nombre}
              </Link>
            ) : (
              <span />
            )}
            {nextDanza && (
              <Link
                to={`/danza/${nextDanza.id}`}
                className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                {nextDanza.nombre}
                <ChevronRight className="h-4 w-4" />
              </Link>
            )}
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DanceDetail;
