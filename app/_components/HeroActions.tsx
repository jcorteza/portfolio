'use client'

import { useRouter } from "next/navigation";
import Button from "../../components/Button";

export default function HeroActions() {
    const router = useRouter();
    return (
        <div className="flex gap-5">
            <Button handleClickAction={() => router.push('/projects')}>See my projects</Button>
            <Button handleClickAction={() => router.push('/contact')} isSecondaryAction>Get in touch</Button>
        </div>
    );
}