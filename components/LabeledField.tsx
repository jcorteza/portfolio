type Props = {
    children: React.ReactNode;
    heading: string;
    description?: string;
    required: boolean;
}
export default function LabeledField({ children, heading, description, required=false }: Props) {
    return (
        <label className="min-w-0 flex flex-col gap-1">
            <div className="min-w-0 font-bold">{heading}{required && <span className="text-secondary-text font-normal">&nbsp;&#40;required&#41;</span>}</div>
            {description && <div>{description}</div>}
            {children}
        </label>
    )
}