export interface Propiedad {
  id: number;
  created_at?: string;
  user_id?: string;

  titulo: string;
  subtitulo: string;
  transaccion: string;
  precio: number;
  tipoPropiedad: string;

  terreno: number | null;
  construccion: number | null;

  ocupacion: string | null;
  pago: string | null;

  descripcion: string | null;

  maps_url: string | null;
  video: string | null;

  servicios: string[];

  recamaras: number | null;
  banos: number | null;
  carros: number | null;

  images: string[];
}