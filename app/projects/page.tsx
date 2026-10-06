import clsx from "clsx";
import LabeledField from "../../components/LabeledField";
import TextInput from "../../components/TextInput";
import { CARD_BASE, TEXT } from "../styles";

export default function ProjectsPage() {
    return (
        <main className="">
            <div className={clsx(CARD_BASE, 'flex flex-col gap-5')}>
                <div className="flex flex-col gap-3">
                    <h1 className={TEXT.cardTitle}>Projects</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <hr aria-hidden />
                <div className="flex flex-col gap-3">
                    <LabeledField heading="Filter by language or skill, e.g. React, Typescript" required={false}>
                        <TextInput name={"filter"} disabled={false}/>
                    </LabeledField>
                </div>
            </div>
        </main>
    );
}