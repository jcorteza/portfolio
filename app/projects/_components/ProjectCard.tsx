'use client'

import clsx from 'clsx';
import { CARD_BASE, DECORATIVE_TAG, PROJECT_SKILL_TAG, TEXT } from '../../../lib/styles';
import Image from 'next/image';
import LinkButton from '../../../components/LinkButton';
import SkillsTags from '../../../components/SkillsTags';

export type Props = {
    projectUrl: string;
    type: string;
    title: string;
    description: string;
    imageUrl: string;
    imageUrlSmall: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    skills: string[];
    source?: string;
}
export default function ProjectCard({
    projectUrl,
    type,
    title,
    description,
    imageUrl,
    imageUrlSmall,
    imageAlt,
    imageWidth,
    imageHeight,
    skills,
    source
}: Props) {
    return (
        <div className={clsx(CARD_BASE, 'flex items-center flex-col gap-5 md:grid md:grid-cols-2 md:gap-10')}>
            <Image src={imageUrlSmall} alt={imageAlt} loading='eager' className="sm:hidden" width={500} height={500} />
            <div className="flex flex-col gap-2.25 sm:order-last md:order-first">
                <h2 className='flex flex-col gap-2.25'>
                    <div className={DECORATIVE_TAG}>{type}</div>
                    <div className={TEXT.cardSubtitle}>{title}</div>
                </h2>
                <p className="text-body-text">{description}</p>
                <SkillsTags skills={skills} />
                <div className={clsx('flex flex-col items-end sm:flex-row', { 'gap-2': !!source })}>
                    <LinkButton href={projectUrl}>View Project</LinkButton>
                    {source && <LinkButton href={source} isSecondaryAction isExternalLink target='blank'>View Source</LinkButton>}
                </div>
            </div>
            <Image src={imageUrl} alt={imageAlt} loading='eager' className="hidden sm:block sm:order-first md:order-last" width={imageWidth} height={imageHeight} />
        </div>
    )
}