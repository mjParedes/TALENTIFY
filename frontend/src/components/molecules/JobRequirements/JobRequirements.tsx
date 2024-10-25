import { Text } from "@/components/atoms/Text/Text";

export const JobRequirements = () => {
  return (
    <div>
      <Text variant="Headline-3/20" className="mt-2 py-4">
        Requerimientos
      </Text>
      <ul className="list-disc pl-5 text-grey-darkFont">
        <li>
          <Text variant="Paragraph-2/14">
            Mínimo 5 años de experiencia como desarrollador Full Stack.
          </Text>
        </li>
        <li>
          <Text variant="Paragraph-2/14">
            Dominio de React, Node.js, y bases de datos relacionales.
          </Text>
        </li>
        <li>
          <Text variant="Paragraph-2/14">
            Experiencia con metodologías ágiles (Scrum, Kanban).
          </Text>
        </li>
        <li>
          <Text variant="Paragraph-2/14">
            Conocimiento en sistemas de control de versiones como Git.
          </Text>
        </li>
        <li>
          <Text variant="Paragraph-2/14">
            Capacidad para diseñar y desarrollar APIs RESTful.
          </Text>
        </li>
        <li>
          <Text variant="Paragraph-2/14">
            Inglés intermedio/avanzado (lectura y escritura).
          </Text>
        </li>
      </ul>
    </div>
  );
};
