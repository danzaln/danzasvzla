
CREATE TABLE public.danzas (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre text NOT NULL,
  estado_origen text NOT NULL,
  descripcion text NOT NULL,
  historia text NOT NULL,
  vestimenta_descripcion text NOT NULL,
  vestimenta_imagen_url text,
  musica_descripcion text NOT NULL,
  imagen_principal_url text,
  youtube_url text,
  audio_url text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.danzas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on danzas"
  ON public.danzas
  FOR SELECT
  USING (true);
