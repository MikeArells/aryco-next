import { Propiedad } from "@/types/propiedad";
import Link from "next/link";

interface PropertyListProps {
  properties: Propiedad[];
}

export default function PropertyList({
  properties,
}: PropertyListProps) {
  return (
    <div>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Tipo</th>
            <th>Transacción</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.titulo}</td>
              <td>{property.tipoPropiedad}</td>
              <td>{property.transaccion}</td>
              <td>
                {property.precio
                  ? `$${property.precio.toLocaleString()}`
                  : "-"}
              </td>

              <td>
                <Link href={`/dashboard/propiedades/editar/${property.id}`}>
                  <button>Editar</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}