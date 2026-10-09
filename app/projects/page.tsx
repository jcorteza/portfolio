'use client'

import clsx from 'clsx';
import { CARD_BASE, TEXT } from '../../lib/styles';
import ProjectFilter from './_components/ProjectsFilter';
import projects from './projects.json';
import ProjectCard, { Props as ProjectCardProps } from './_components/ProjectCard';
import { useState } from 'react';
import { filterHasMatch } from '../../lib/utils';

export default function ProjectsPage() {
    const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

    return (
        <main className="flex flex-col gap-5">
            <div className={clsx(CARD_BASE, 'flex flex-col gap-5')}>
                <div className="flex flex-col gap-3">
                    <h1 className={TEXT.cardTitle}>Projects</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <hr aria-hidden />
                <ProjectFilter filterOptions={new Set(projects.flatMap(({ skills }) => skills))} filters={activeFilters} setFiltersAction={setActiveFilters} />
            </div>
            {projects
                .filter(project => activeFilters.values().every((filter) => filterHasMatch(filter, project.skills)))
                .map((attributes, idx) =>
                    <ProjectCard
                        key={idx}
                        {...attributes as ProjectCardProps} />)}
        </main>
    );
}