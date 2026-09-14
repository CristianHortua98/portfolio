import { proyectos } from "@/data/data-portfolio"
import { BadgedSection } from "./components/BadgedSection"
import { CardProject } from "./components/CardProject"

export const Projects = () => {
  return (
    <>
      <div className="w-full bg-alternate-custom font-quicksand" id="proyectos">
        <div className="container mx-auto px-4 lg:px-8 pt-12 pb-12">
          <div className="flex justify-center mb-4">
            <BadgedSection title="PROYECTOS"/>
          </div>
          <h2 className="text-2xl text-white font-bold text-center mb-6">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {
              proyectos.map((proyecto, index) => (
                <CardProject key={index} project={proyecto}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}