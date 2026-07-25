export interface PropertyFormData {
  titulo: string;
  subtitulo: string;
  transaccion: string;

  precio: number | null;

  tipoPropiedad: string;

  terreno: number | null;
  construccion: number | null;

  ocupacion: string;
  pago: string;

  descripcion: string;

  maps_url: string;

  video: string;

  servicios: string[];

  recamaras: number | null;

  banos: number | null;

  carros: number | null;

  images: File[];
}