import { Badge } from "@/components/ui/badge";

interface Props {
    title: string;
}

export const BadgeHabilidadBlanda = ({title}: Props) => {
  return (
    <Badge className="p-4 bg-secondary-custom text-white hover:shadow-lg hover:shadow-success-custom">{title}</Badge>
  )
}