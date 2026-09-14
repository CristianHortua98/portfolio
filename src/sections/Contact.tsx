import { BadgedSection } from "./components/BadgedSection"

export const Contact = () => {
  return (
    <>
      <div className="w-full bg-primary-custom font-quicksand" id="contacto">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 pb-12">
            <div>
              <BadgedSection title="CONTACTO"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
