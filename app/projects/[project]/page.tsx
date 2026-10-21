import clsx from 'clsx';
import Link from 'next/link';
import { FOCUS, NAV_COLORS_BASE, ACTIVE_INNER_SHADOW, DECORATIVE_TAG, TEXT, CARD_BASE } from '../../../lib/styles';
import projects from '../projects.json';
import LinkButton from '../../../components/LinkButton';
import SkillsTags from '../../../components/SkillsTags';
import Image from 'next/image';

type Project = {
    type: string;
    title: string;
    description: string;
    imageAlt: string;
    skills: string[];
    source?: string;
    liveUrl?: string;
    role: string;
    timeline: string;
    team: string;
    status: string;
}

const projectEntries = Object.entries(projects)

const dl = (title: string, text?: string, skills?: string[]) => (
    <div className={clsx('w-full min-w-0 flex flex-col gap-1', { 'md:col-span-4': skills })}>
        <dt className="font-bold text-ink-muted">{title}</dt>
        <dd className="text-brand-ink">{text || <SkillsTags skills={skills as string[]} />}</dd>
    </div>
);

export default async function ProjectCaseStudy({ params }: { params: Promise<{ project: string; }>}) {
    const project = (await params).project;
    const { default: Content } = await import(`../_caseStudies/${project}.mdx`)
    const {
        title,
        description,
        liveUrl,
        source,
        imageAlt,
        role,
        timeline,
        team,
        status,
        skills
    } = projects[project as keyof typeof projects] as Project;
    const projectIdx = projectEntries.findIndex(([projectKey]) => projectKey === project);
    const hasPrev = projectIdx > 0;
    const hasNext = projectIdx < projectEntries.length - 1;

    return (
        <main className="w-full min-w-0 flex flex-col gap-5 md:gap-7">
            <nav aria-label="Breadcrumbs">
                <ol className="font-bold text-sm flex">
                    <li>
                        <Link
                            className={clsx(
                                'p-3 underline border-transparent hover:border-(--card-edge) active:border-(--card-edge)',
                                FOCUS,
                                NAV_COLORS_BASE,
                                ACTIVE_INNER_SHADOW,
                            )}
                            href="/projects"
                            prefetch={false}>
                            Projects
                        </Link>
                    </li>
                    <li aria-current="page" className="text-body-text">
                        <span aria-hidden>/&nbsp;</span>{title}
                    </li>
                </ol>
            </nav>
            <div className="w-full min-w-0 flex flex-col md:flex-row gap-3 md:gap-10">
                <div className="w-full min-w-0 flex flex-col gap-3">
                    <h1 className="flex flex-col gap-2 sm:gap-3 md:gap-5">
                        <div className={DECORATIVE_TAG}>Case Study</div>
                        <div className={clsx(TEXT.cardTitle, 'md:text-9xl')}>{title}</div>
                    </h1>
                    <p className="md:text-lg">{description}</p>
                    <div className="flex">
                        {liveUrl && <LinkButton target="_blank" href={liveUrl}>Visit Live Site</LinkButton>}
                        {source && <LinkButton target="_blank" href={source} isSecondaryAction={!!liveUrl}>View Source</LinkButton>}
                    </div>
                </div>
                <Image loading='eager' src={`/images/${project}.png`} alt={imageAlt} width={1500} height={1125} className='rounded-sm border border-(--card-line) md:max-w-1/2' />
            </div>
            <dl className={clsx(
                'w-full min-w-0 grid gap-4 md:grid-cols-4',
                CARD_BASE
            )}>
                {dl('Role', role)}
                {dl('Timeline', timeline)}
                {dl('Team', team)}
                {dl('Status', status)}
                {dl('Built with', undefined, skills)}
            </dl>
            <ol className='flex flex-col gap-4'>
                <Content />
            </ol>
            {(hasPrev || hasNext) && <hr aria-hidden className="text-brand-ink" />}
            <nav className={clsx(
                'w-full min-w-0',
                { 'flex flex-col gap-2': hasPrev && hasNext }
            )}>
                {hasPrev &&
                    <Link href={`/projects/${projectEntries[projectIdx - 1][0]}`} className="w-full min-w-0 flex flex-col items-start">
                        <p className="font-bold text-brand-ink text-sm uppercase">Previous Project</p>
                        <p className={clsx(TEXT.cardSubtitle, 'underline')}>{projectEntries[projectIdx - 1][1].title}</p>
                    </Link>}
                {hasNext &&
                    <Link href={`/projects/${projectEntries[projectIdx + 1][0]}`} className="w-full min-w-0 flex flex-col items-end">
                        <p className="font-bold text-brand-ink text-sm uppercase">Next Project</p>
                        <p className={clsx(TEXT.cardSubtitle, 'underline')}>{projectEntries[projectIdx + 1][1].title}</p>
                    </Link>}
            </nav>
        </main>
    )
}