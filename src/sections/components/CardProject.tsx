import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/data-portfolio";

interface Props {
    project: Project;
}

export const CardProject = ({project}: Props) => {
  return (
    <>
        <Card className="relative mx-auto w-full max-w-sm pt-0 bg-primary-custom border border-secondary-custom hover:shadow-lg shadow-danger-custom">
            <div className="absolute inset-0 z-30 aspect-video" />
            <img src={project.image} alt="Event cover" className="relative z-20 aspect-video w-full object-cover"/>
            <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                    {project.tecnologies.length > 0 ? (
                        project.tecnologies.map((tecno, index) => (
                        <Badge key={index} className="bg-danger-custom text-secondary-custom p-3">
                            {tecno}
                        </Badge>
                        ))
                    ) : (
                        <Badge variant="secondary">
                        Ninguna
                        </Badge>
                    )}
                </div>
                <CardDescription className="text-white">{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full bg-secondary-custom hover:bg-danger-custom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M15.188 14.688Q16.5 13.375 16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16t3.188-1.312m-5.1-1.276Q9.3 12.625 9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2t-1.912-.787m-4.738 3.55Q2.35 14.925 1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19t-6.65-2.037m11.838-1.45Q19.55 14.025 20.8 11.5q-1.25-2.525-3.613-4.012T12 6T6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17t5.188-1.487" />
                    </svg>
                    Ver Proyecto
                </Button>
            </CardFooter>
        </Card>
    </>
  )
}