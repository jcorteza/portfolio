import clsx from 'clsx';
import HeroActions from './_components/HeroActions';
import { CARD_BASE, CARD_DIVIDER, DECORATIVE_TAG, TEXT } from '../lib/styles';
import ContactForm from './contact/_components/ContactForm';
import projects from './projects/projects.json';
import Image from 'next/image';
import SkillsTags from '../components/SkillsTags';
import LinkButton from '../components/LinkButton';
import atacamaHike from './atacama-hike.jpg'

const symday = projects[0];

export default function Home() {
    return (
        <main className="relative grow min-w-0 w-full flex flex-col justify-between gap-3 sm:gap-5 md:gap-10">
            <div className="sticky top-17 sm:top-19 grow flex flex-col justify-end h-[calc(100svh-(--spacing(35)))] desktop:h-[calc(100svh-(--spacing(80)))]">
                <div className="hero-fade flex flex-col gap-2 sm:gap-3 md:gap-5">
                    <h1 className="flex flex-col gap-2 sm:gap-3 md:gap-5">
                        <div className={DECORATIVE_TAG}>Josephine Cortez-Ayala</div>
                        <div className="text-body-text text-[9svh] leading-[10svh] desktop:text-[8.5rem] desktop:leading-26 uppercase font-title">Full-Stack Software Engineer</div>
                    </h1>
                    <p className="text-brank-ink text-lg w-full md:w-1/2 leading-5.5 sm:leading-6 md:leading-7">Building web products from concept through user activation.</p>
                    <HeroActions />
                </div>
            </div>
            <div className={clsx(CARD_BASE, 'relative z-10 min-w-0 w-full flex flex-col gap-4')}>
                <h2 className={TEXT.cardTitle}>About</h2>
                <div className="w-full min-w-0 flex flex-col items-center md:flex-row md:items-start md:justify-start gap-5">
                        <div className="w-full min-w-0 flex flex-col gap-3 text-body-text">
                            <p>My non-technical background in marketing, public relations, and psychology has taught me to keep the end user front and center in technical decisions. By investigating their mental models, I make sure what I build fits their needs.</p>
                            <p>I do my best work when approaching problems in the context of the whole product. Collaboration is a natural part of my work style, and I’m not too proud to admit when I don&rsquo;t know something. In fact, I&rsquo;m often known as the person on the team who &ldquo;asks all the questions.&rdquo;</p>
                            <p>I believe in collecting actionable data, not data for the sake of collecting it or for selling it. I&rsquo;m particularly interested in the application of data to reduce the impact of climate change and improve equity in the US education system.</p>
                            <p>In my free time, you can find me traveling with my dog, training in Krav Maga and Brazilian Jiu-Jitsu, or working on creative projects.</p>
                        </div>
                    <Image loading='eager' src={atacamaHike} alt='Josephine motioning up with outstretched arms towards the milky way' width={1000} height={1000} className='grow-0 w-full min-w-0' />
                </div>
                <hr aria-hidden className={CARD_DIVIDER} />
                <div className="w-full min-w-0 flex flex-col gap-4 text-body-text">
                    <h2 className={TEXT.cardTitle}>Projects</h2>
                    <div className={clsx('flex items-center flex-col gap-5 md:grid md:grid-cols-2 md:gap-10')}>
                        <Image loading='eager' src={symday.imageUrl} width={symday.imageWidth} height={symday.imageHeight} alt={symday.imageAlt} className='w-full min-w-0' />
                        <div className='flex flex-col gap-3'>

                            <h3 className='flex flex-col gap-4'>
                                <div className={DECORATIVE_TAG}>Featured Project</div>
                                <div className={TEXT.cardSubtitle}>{symday.title}</div>
                            </h3>
                            <p className="text-body-text">{symday.description}</p>
                            <SkillsTags skills={[...new Set(projects.flatMap(project => project.skills))]} />
                            <div className='flex flex-col items-end sm:flex-row gap-2'>
                                <LinkButton href='/projects'>See all projects</LinkButton>
                                <LinkButton href='https://symday-tracker.app/demo' isSecondaryAction isExternalLink target='blank'>Try Demo</LinkButton>
                            </div>
                        </div>
                    </div>
                </div>
                <hr aria-hidden className={CARD_DIVIDER} />
                <div className='flex flex-col gap-3'>
                    <h3 className={TEXT.cardSubtitle}>
                        Tech accross projects
                    </h3>
                    <SkillsTags skills={[...new Set(projects.flatMap(project => project.skills))]} />
                </div>
                <hr aria-hidden className={CARD_DIVIDER} />
                <div className="flex flex-col gap-3 text-body-text">
                    <h2 className={TEXT.cardTitle}>Contact</h2>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}