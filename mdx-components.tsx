import type { MDXComponents } from 'mdx/types'
import { TEXT } from './lib/styles';
import clsx from 'clsx';

const components: MDXComponents = {
    h2: ({ children }) => (
        <h2 className={clsx(TEXT.cardTitle, 'hyphens-manual')}>{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 className={clsx(TEXT.cardSubtitle, 'hyphens-auto')}>{children}</h3>
    ),
    h4: ({ children }) => (
        <h4>{children}</h4>
    ),
    code: ({ children }) => (
        <code className='text-tag-ink bg-tag-bg p-1'>{children}</code>
    ),
    li: ({ children }) => (
        <li className='list-disc ml-5'>{children}</li>
    )
};

export function useMDXComponents(): MDXComponents {
    return components
}