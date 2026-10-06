import clsx from "clsx";
import { FORM_INPUT } from "../../styles";
import LabeledField from "./LabeledField";
import TextInput from "./TextInput";
import Button from "../../../components/Button";

export default function ContactForm() {
    return (
        <form className="flex flex-col gap-3">
            <LabeledField heading="Name" required>
                <TextInput name="name" disabled={false} required invalid={false} />
            </LabeledField>
            <LabeledField heading="Email" required>
                <TextInput name="email" disabled={false} required invalid={false} />
            </LabeledField>
            <LabeledField heading="Message" required>
                <textarea name="message" disabled={false} required aria-invalid={false} className={clsx(FORM_INPUT, 'h-50')} />
            </LabeledField>
            <Button isSubmit>Send message</Button>
        </form>
    )
}