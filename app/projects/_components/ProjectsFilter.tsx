'use client'

import { useEffect, useRef, useState } from 'react';
import Button from '../../../components/Button';
import LabeledField from '../../../components/LabeledField';
import TextInput from '../../../components/TextInput';

type Props = {
    filterOptions: Set<string>;
    filters: Set<string>;
    setFiltersAction: React.Dispatch<React.SetStateAction<Set<string>>>;
}
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
                {[...filterOptions].map((skill, idx) =>
                    <Button
                        key={idx}
                        isSecondaryAction
                        handleClickAction={() => {
                            setFilterInputText(filterInputText.length > 0 ? `${filterInputText}, ${skill}` : skill);
                        }}>
                        {skill}
                    </Button>)}
            </div>
        </div>
    )
}