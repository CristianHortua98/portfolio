import { Button } from "@/components/ui/button"
import { BadgedSection } from "./components/BadgedSection"

export const Home = () => {
    return (
        <>
            <div className="w-full bg-primary-custom font-quicksand" id="inicio">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-10 pb-10 md:pt-16 md:pb-16">
                        <div>
                            <BadgedSection title="DESARROLLADOR FULL STACK"/>
                            <p className="text-6xl mt-8 mb-4 text-white">Hola, soy <span className="text-danger-custom font-bold">Cristian</span></p>
                            <p className="text-white text-3xl mb-3">Construyo soluciones para la web.</p>
                            <p className="text-white text-lg mb-6">Desarrollador apasionado por crear aplicaciones modernas, funcionales y eficientes utilizando tecnologías actuales.</p>
                            <a download href="/public/hv.pdf">
                                <Button className="bg-secondary-custom text-white border-secondary-custom hover:bg-danger-custom cursor-pointer text-base sm:text-xl px-5 py-4 sm:p-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="currentColor" d="m12 16l4-4l-1.4-1.4l-1.6 1.6V8h-2v4.2l-1.6-1.6L8 12zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
                                    </svg>
                                    Descargar CV
                                </Button>
                            </a>
                            <div className="mt-8">
                                <p className="text-white mb-4 font-bold">Tecnologias con las que trabajo</p>

                                <div className="flex flex-wrap gap-4 sm:gap-5 max-w-xl">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-10 h-10 sm:w-12 sm:h-12" alt="Typescript"/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-10 h-10 sm:w-12 sm:h-12" alt="Javascript"/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-10 h-10 sm:w-12 sm:h-12" alt="React"/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" className="w-10 h-10 sm:w-12 sm:h-12" alt="Angular"/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg" className="w-10 h-10 sm:w-12 sm:h-12" alt="NestJS"/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" className="w-10 h-10 sm:w-12 sm:h-12" alt="NodeJS"/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" className="w-10 h-10 sm:w-12 sm:h-12" alt="PHP"/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-10 h-10 sm:w-12 sm:h-12" alt="Git"/>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <p className="text-3xl text-white">Imagen</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}