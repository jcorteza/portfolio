export default function Emblem({ isForFooter }: { isForFooter?: boolean }) {
    return (
        <svg className={isForFooter ? 'w-16 h-16' : 'w-[50px] h-[50px]'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {/* <style>
                <!-- .stroke { stroke: #003e1f } -->
                .stroke { stroke: #000000 }
                .highlight-stroke { stroke: #ffffff }
                @media (prefers-color-scheme: dark) {
                    .stroke { stroke: #d5f2e3 }
                    .highlight-stroke { stroke: #000000 }
                }
            </style> */}
            <defs><clipPath id="jcb"><rect x="39.5" y="46" width="10" height="28"/></clipPath></defs>
            <path className="text-body-text" d="M50 4 L96 50 L50 96 L4 50 Z" fill="none" stroke="currentColor" strokeWidth="5"/>
            <path className="text-body-text" d="M50 11 L89 50 L50 89 L11 50 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            <g transform="translate(50 50) scale(.78) translate(-54.73 -47.21)">
                <path className="text-body-text" d="M70.5 46 A13 13 0 0 0 44.5 46 L44.5 65 A13 13 0 0 0 70.5 65" fill="none" stroke="currentColor" strokeWidth="6.5" strokeLinejoin="round"/>
                <path className="text-[var(--emblem-highlight)]" d="M53 10 L53 52 A12 12 0 0 1 29 52 L29 47" fill="none" stroke="currentColor" strokeWidth="10.5" strokeLinejoin="round"/>
                <path className="text-body-text" d="M53 10 L53 52 A12 12 0 0 1 29 52 L29 47" fill="none" stroke="currentColor" strokeWidth="6.5" strokeLinejoin="round"/>
                <g clipPath="url(#jcb)">
                    <path className="text-body-text" d="M70.5 46 A13 13 0 0 0 44.5 46 L44.5 65 A13 13 0 0 0 70.5 65" fill="none" stroke="currentColor" strokeWidth="6.5" strokeLinejoin="round"/>
                </g>
            </g>
        </svg>
    );
}
