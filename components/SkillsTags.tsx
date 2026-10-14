import { PROJECT_SKILL_TAG } from "../lib/styles";

export default function SkillsTags({ skills }: { skills: string[] }) {
    return (
        <ul className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => <li key={idx} className={PROJECT_SKILL_TAG}>{skill}</li>)}
        </ul>
    );
}