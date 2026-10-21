'use client'

import { useEffect, useRef, useState } from 'react';
import LabeledField from '../../../components/LabeledField';
import TextInput from '../../../components/TextInput';
import ActionButton from '../../../components/ActionButton';
import { filterHasMatch } from '../../../lib/utils';

type Props = {
    filterOptions: Set<string>;
    filters: Set<string>;
    setFiltersAction: React.Dispatch<React.SetStateAction<Set<string>>>;
}
const splitRegex = /,\s*/;

export default function ProjectFilter({ filterOptions, filters, setFiltersAction }: Props) {
    const [filterInputText, setFilterInputText] = useState([...filters].join(', '));
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(() => {
            const updatedFilters = new Set<string>();
            filterInputText.split(',').forEach(filter => updatedFilters.add(filter.trim()));
            setFiltersAction(updatedFilters);
            debounceTimer.current = null;
        }, 500);

        return () => {
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current);
                debounceTimer.current = null;
            }
        }
    }, [filterInputText]);

    return (
        <div className="flex flex-col gap-3">
            <div className="max-w-md">
                <LabeledField heading="Filter by language or skill, e.g. React, Typescript" required={false}>
                    <TextInput
                        name={"filter"}
                        disabled={false}
                        value={filterInputText}
                        onChangeAction={(event) => setFilterInputText(event.target.value)} />
                </LabeledField>
            </div>
            <div className="flex flex-wrap gap-2">
                {[...filterOptions].map((skill, idx) => {
                    const isActive = filterHasMatch(skill, filterInputText.split(splitRegex));
                    return (
                        <ActionButton
                            key={idx}
                            isActive={isActive}
                            handleClickAction={() => {
                                setFilterInputText(filterInputText.length > 0 ? `${filterInputText}, ${skill}` : skill);
                            }}>
                            {isActive &&
                                <>
                                    <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="shrink-0 text-surface size-5">
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                    </svg>
                                    &nbsp;
                                </>}
                            {skill}
                        </ActionButton>
                    );
                })}
            </div>
        </div>
    )
}