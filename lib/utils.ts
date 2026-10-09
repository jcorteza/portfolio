export const filterHasMatch = (filter: string, options: string[]) => {
    const value = filter.trim().toLowerCase();
    const isFullNameListed = options.some(skill => {
        const normalizedSkill = skill.toLowerCase();
        return normalizedSkill === value || normalizedSkill.replace('.', '') === value.replace('.', '');
    });
    const isPartialInList = options.some(skill => skill.toLowerCase().startsWith(value));
    return isFullNameListed || isPartialInList;
};

export const htmlEncodePreserveSpaces = (text: string) => {
    if (!text) return '';
    
    return text
        // 1. Standard HTML Encoding (Escaping dangerous characters)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        // 2. Preserve tabs and newlines
        .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
        .replace(/\r?\n/g, '<br />')
        // 3. Preserve consecutive spaces without breaking layout text-wrapping
        .replace(/ {2,}/g, (match) => '&nbsp;'.repeat(match.length - 1) + ' ');
}