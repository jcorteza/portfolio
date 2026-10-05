import clsx from 'clsx';
import { ACTIVE_INNER_SHADOW, NAV_COLORS_BASE, NAV_COLORS_INACTIVE, PAGE_PADDING_X } from '../styles';
import EmblemLink from './EmblemLink';
import LinkMenu from './LinkMenu';
import ThemeSettings from './ThemeSettings';

export default function Footer() {
    return (
        <div className={clsx(PAGE_PADDING_X, 'w-full')}>
            <div className='w-full grid grid-cols-[40%_auto_auto]'>
                <div className="flex flex-col gap-5">
                    <EmblemLink widthNHeight={64} />
                    <p>Build tools people want to use.</p>
                    <ThemeSettings />
                </div>
                <div className="grow flex flex-col gap-1">
                    <div className="text-sm uppercase px-3">Pages</div>
                    <LinkMenu isHeaderNav={false} />
                </div>
                <div>
                    <div className="text-sm uppercase px-3">Other Links</div>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <a
                                className={clsx(
                                    NAV_COLORS_INACTIVE,
                                    NAV_COLORS_BASE,
                                    ACTIVE_INNER_SHADOW,
                                    'p-3 inline-block underline'
                                )}
                                href='https://github.com/jcorteza'
                                target="_blank">
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                className={clsx(
                                    NAV_COLORS_INACTIVE,
                                    NAV_COLORS_BASE,
                                    ACTIVE_INNER_SHADOW,
                                    'p-3 inline-block underline'
                                )}
                                href='https://www.linkedin.com/in/josephine-cortez-ayala/'
                                target="_blank">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                className={clsx(
                                    NAV_COLORS_INACTIVE,
                                    NAV_COLORS_BASE,
                                    ACTIVE_INNER_SHADOW,
                                    'p-3 inline-block underline'
                                )}
                                href='mailto:josephinecrtz@yahoo.com'
                                target="_blank">
                                Email
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <small className='block font-bold mt-10'>&copy; 2026 Josephine Cortez-Ayala</small>
        </div>
    );
}