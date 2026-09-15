import { Badge } from "@/components/ui/badge"
import { BadgedSection } from "./components/BadgedSection"

export const Contact = () => {
  return (
    <>
      <div className="w-full bg-primary-custom font-quicksand" id="contacto">
        <div className="container mx-auto px-4 lg:px-8 pt-12 pb-12">
          <BadgedSection title="CONTACTO"/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-36 mt-6">
            <div>
              <h4 className="text-white mb-4 mt-4 text-lg">Trabajemos juntos</h4>
              <h2 className="text-3xl text-white font-bold mb-4">¿Tienes algún proyecto en mente?</h2>
              <p className="text-xl text-white mb-4">Siempre estoy abierto a hablar sobre nuevos proyectos y oportunidades.</p>
            </div>
            <div>
              <p className="text-md text-white">Puedes escribirme por correo o seguirme en redes para ver mi trabajo.</p>
              <div className="grid grid-cols-2 md:grid-cols-8 gap-6 mt-4 mb-8 justify-items-center">
                <div className="border border-secondary-custom p-3 rounded-xl bg-alternate-custom">
                  <a href="https://github.com/CristianHortua98" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                      <path d="M0 0h16v16H0z" fill="none" />
                      <path fill="#fff" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </div>
                <div className="border border-secondary-custom p-3 rounded-xl bg-alternate-custom">
                  <a href="www.linkedin.com/in/cristian-alejandro-hortua-saenz-6b50a712a" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 128 128">
                      <path d="M0 0h128v128H0z" fill="none" />
                      <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" />
                      <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" />
                    </svg>

                  </a>
                </div>
                <div className="border border-secondary-custom p-3 rounded-xl bg-alternate-custom">
                  <a href="mailto:alejo.hortua3@gmail.com?subject=Contacto%20desde%20mi%20portafolio&body=Hola%20Cristian,%20me%20gustaría%20ponerme%20en%20contacto%20contigo." rel="noopener noreferrer" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 204">
                      <path d="M0 0h256v204H0z" fill="none" />
                      <defs>
                        <linearGradient id="SVGHzDbHcwG" x1="165" x2="165" y1="44" y2="166" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#60d673" />
                          <stop offset=".17" stop-color="#42c868" />
                          <stop offset=".39" stop-color="#0ebc5f" />
                          <stop offset=".62" stop-color="#00a9bb" />
                          <stop offset=".86" stop-color="#3c90ff" />
                          <stop offset="1" stop-color="#3186ff" />
                        </linearGradient>
                        <linearGradient id="SVG41ATXboZ" x1="8" x2="184" y1="46.13" y2="46.13" gradientUnits="userSpaceOnUse">
                          <stop offset=".08" stop-color="#ff63a0" />
                          <stop offset=".3" stop-color="#fc413d" />
                          <stop offset=".5" stop-color="#fc413d" />
                          <stop offset=".65" stop-color="#fc413d" />
                          <stop offset=".72" stop-color="#fc5c30" />
                          <stop offset=".86" stop-color="#feb10c" />
                          <stop offset=".91" stop-color="#fec700" />
                          <stop offset=".96" stop-color="#ffdb0f" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#SVGHzDbHcwG)" d="M146 44h38v110c0 6.627-5.373 12-12 12h-20a6 6 0 0 1-6-6z" transform="translate(-11.636 -37.818)scale(1.45454)" />
                      <path fill="#fc413d" d="M55.273 26.182H0v160c0 9.638 7.816 17.454 17.455 17.454h29.09a8.727 8.727 0 0 0 8.728-8.728z" />
                      <path fill="url(#SVG41ATXboZ)" d="M39.226 30.456c-8.033-6.752-20.018-5.714-26.77 2.319c-6.752 8.032-5.714 20.017 2.319 26.77l76.078 63.949a8 8 0 0 0 10.295 0l76.078-63.95c8.032-6.752 9.07-18.737 2.318-26.77c-6.752-8.032-18.737-9.07-26.769-2.318L96 78.18z" transform="translate(-11.636 -37.818)scale(1.45454)" />
                    </svg>
                  </a>
                </div>
                <div className="border border-secondary-custom p-3 rounded-xl bg-alternate-custom">
                  <a href="https://wa.me/573192208207" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 258">
                      <path d="M0 0h256v258H0z" fill="none" />
                      <defs>
                        <linearGradient id="SVGK3KZq49U" x1="50%" x2="50%" y1="100%" y2="0%">
                          <stop offset="0%" stop-color="#1faf38" />
                          <stop offset="100%" stop-color="#60d669" />
                        </linearGradient>
                        <linearGradient id="SVGefMkoEOd" x1="50%" x2="50%" y1="100%" y2="0%">
                          <stop offset="0%" stop-color="#f9f9f9" />
                          <stop offset="100%" stop-color="#fff" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#SVGK3KZq49U)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" />
                      <path fill="url(#SVGefMkoEOd)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z" />
                      <path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" />
                    </svg>
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
