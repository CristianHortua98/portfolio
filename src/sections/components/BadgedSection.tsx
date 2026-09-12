interface Props {
    title: string;
}

export const BadgedSection = ({ title }: Props) => {
  return (
    <>
        <span className="bg-danger-custom p-2 text-xs font-bold rounded-md text-secondary-custom mb-5">{ title }</span>
    </>
  )
}
