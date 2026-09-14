import { BadgedSection } from "./components/BadgedSection"
import { tecnologias } from "@/data/data-portfolio"
import { SeccionTecnologia } from "./components/SeccionTecnologia"

export const Skills = () => {

  return (
      <>
        <div className="w-full bg-primary-custom font-quicksand" id="tecnologias">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="pt-12 pb-12">
              <div className="flex justify-center">
                <BadgedSection title="TECNOLOGIAS"/>
              </div>
              <h2 className="text-white text-2xl font-bold text-center mb-4">Tecnologías</h2>
              <p className="text-sm text-center text-white mb-4">Herramientas y tecnologias que utilizo para construir soluciones modernas, escalables y de alto rendemiento.</p>

              <SeccionTecnologia title="Frontend" tecnologias={tecnologias.frontend}/>
              <SeccionTecnologia title="Backend" tecnologias={tecnologias.backend}/>
              <SeccionTecnologia title="Otros" tecnologias={tecnologias.otros}/>

            </div>
          </div>
        </div>
      </>
  )
}
