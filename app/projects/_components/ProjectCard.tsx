'use client'

import clsx from 'clsx';
import { CARD_BASE, DECORATIVE_TAG, TEXT } from '../../../lib/styles';
import Image from 'next/image';
import LinkButton from '../../../components/LinkButton';
import SkillsTags from '../../../components/SkillsTags';

export type Props = {
    path: string;
    type: string;
    title: string;
    description: string;
    imageAlt: string;
    skills: string[];
    source?: string;
}
export default function ProjectCard({
    path,
    type,
    title,
    description,
    imageAlt,
    skills,
    source
}: Props) {
    const imageSrc = `/images/${path}.png`;
    return (
        <div className={clsx(CARD_BASE, 'flex items-center flex-col gap-5 md:grid md:grid-cols-2 md:gap-10')}>
            <Image src={imageSrc} alt={imageAlt} loading='eager' className="sm:hidden" width={1500} height={1125} />
            <div className="flex flex-col gap-2.25 sm:order-last md:order-first">
                <h2 className='flex flex-col gap-2.25'>
                    <div className={DECORATIVE_TAG}>{type}</div>
                    <div className={TEXT.cardSubtitle}>{title}</div>
                </h2>
                <p className="text-body-text">{description}</p>
                <SkillsTags skills={skills} />
                <div className={clsx('flex flex-col items-end sm:flex-row', { 'gap-2': !!source })}>
                    <LinkButton href={`/projects/${path}`}>View Project</LinkButton>
                    {source && <LinkButton href={source} isSecondaryAction isExternalLink target='blank'>View Source</LinkButton>}
                </div>
            </div>
            <Image src={imageSrc} alt={imageAlt} loading='eager' className="hidden sm:block sm:order-first md:order-last" width={1500} height={1125} />
        </div>
    )
}