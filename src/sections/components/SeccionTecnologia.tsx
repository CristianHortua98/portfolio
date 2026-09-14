import { type Tecnologia } from '../../data/data-portfolio';


interface Props {
    title: string;
    tecnologias: Tecnologia[];
}

export const SeccionTecnologia = ({title, tecnologias}: Props) => {
    return (
        <>
            {/* <h3 className="text-xl font-bold text-white">{title}</h3> */}
            <div className="flex items-center gap-3 mb-6">
                <span className="text-danger-custom font-mono text-md">
                    {"<"}
                </span>

                <h3 className="text-lg font-bold text-white">
                    {title}
                </h3>

                <span className="text-danger-custom font-mono text-md">
                    {"/>"}
                </span>
                <div className="h-px flex-1 bg-secondary-custom/50"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-8 gap-4 mt-8 mb-8">
                {
                    tecnologias.map((tecnologia, index) => (
                        <div key={index} className="bg-alternate-custom border border-secondary-custom rounded-2xl p-6 hover:shadow shadow-danger-custom">
                            <div className="flex items-center justify-center">
                                <img className="mb-2 object-cover" src={tecnologia.linkImg} width={30} height={30} />
                            </div>
                            <div className="flex items-center justify-center">
                                <h4 className="text-white text-sm">{tecnologia.name}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}