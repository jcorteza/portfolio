'use client'

import clsx from 'clsx';
import { CARD_BASE, CARD_DIVIDER, TEXT } from '../../lib/styles';
import ProjectFilter from './_components/ProjectsFilter';
import projects from './projects.json';
import ProjectCard from './_components/ProjectCard';
import { useState } from 'react';
import { filterHasMatch } from '../../lib/utils';

const projectsList = Object.entries(projects);

export default function ProjectsPage() {
    const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

    return (
        <main className="flex flex-col gap-5">
            <div className={clsx(CARD_BASE, 'flex flex-col gap-5')}>
                <div className="flex flex-col gap-3">
                    <h1 className={TEXT.cardTitle}>Projects</h1>
                </div>
                {/* <hr aria-hidden className={CARD_DIVIDER} />
                <ProjectFilter filterOptions={new Set(projectsList.flatMap(([_, project]) => project.skills))} filters={activeFilters} setFiltersAction={setActiveFilters} /> */}
            </div>
            {projectsList
                .filter(([_, project]) => activeFilters.values().every((filter) => filterHasMatch(filter, project.skills)))
                .map(([key, attributes]) => (
                    <ProjectCard
                        key={key}
                        path={key}
                        {...attributes} />))}
        </main>
    );
}