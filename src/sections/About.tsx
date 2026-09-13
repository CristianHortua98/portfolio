import { BadgedSection } from "./components/BadgedSection"
import { fullName, habilidadesBlandas, role } from "@/data/data-portfolio"
import { BadgeHabilidadBlanda } from "./components/BadgeHabilidadBlanda"
import { Badge } from "@/components/ui/badge"

export const About = () => {
  return (
    <>
      <div className="w-full bg-alternate-custom font-quicksand" id="sobre-mi">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 pb-12">
            <div>
              <BadgedSection title="SOBRE MI"/>
              <h3 className="mt-8 text-2xl text-white font-bold mb-4">{ fullName }</h3>
              <Badge className="mb-4 p-3 bg-danger-custom text-alternate-custom">{ role }</Badge>
              <p className="text-white text-md mb-4">Ingeniero de Software de 28 años y Senior Fullstack Developer con más de 5 años de experiencia transformando necesidades de negocio en productos digitales eficientes, escalables y fáciles de mantener. He liderado y ejecutado el ciclo de vida completo del software: desde la concepción de la arquitectura y el diseño, hasta el desarrollo end-to-end, pruebas y despliegue en producción. Mi enfoque combina rigor técnico, buenas prácticas y un aprendizaje continuo orientados a generar impacto real en cada proyecto.</p>
            </div>
            <div>
              <div className="p-8 border border-danger-custom bg-primary-custom rounded-2xl">
                <div className="flex justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                    <path d="M0 0h16v16H0z" fill="none" />
                    <g fill="#fff">
                      <path d="M9.669.864L8 0L6.331.864l-1.858.282l-.842 1.68l-1.337 1.32L2.6 6l-.306 1.854l1.337 1.32l.842 1.68l1.858.282L8 12l1.669-.864l1.858-.282l.842-1.68l1.337-1.32L13.4 6l.306-1.854l-1.337-1.32l-.842-1.68zm1.196 1.193l.684 1.365l1.086 1.072L12.387 6l.248 1.506l-1.086 1.072l-.684 1.365l-1.51.229L8 10.874l-1.355-.702l-1.51-.229l-.684-1.365l-1.086-1.072L3.614 6l-.25-1.506l1.087-1.072l.684-1.365l1.51-.229L8 1.126l1.356.702z" />
                      <path d="M4 11.794V16l4-1l4 1v-4.206l-2.018.306L8 13.126L6.018 12.1z" />
                    </g>
                  </svg>

                  <p className="text-center text-lg text-white font-bold">
                    Habilidades Blandas
                  </p>

                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2 max-w-xl">
                  {
                    habilidadesBlandas.map((habilidad, index) => (
                      <BadgeHabilidadBlanda key={index} title={habilidad}/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
