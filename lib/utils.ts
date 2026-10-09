export const filterHasMatch = (filter: string, options: string[]) => {
    const value = filter.trim().toLowerCase();
    const isFullNameListed = options.some(skill => {
        const normalizedSkill = skill.toLowerCase();
        return normalizedSkill === value || normalizedSkill.replace('.', '') === value.replace('.', '');
    });
    const isPartialInList = options.some(skill => skill.toLowerCase().startsWith(value));
    return isFullNameListed || isPartialInList;
};