import EmblemLink from './EmblemLink';
import { PAGE_PADDING_X } from '../styles';
import clsx from 'clsx';
import InternalLinkMenu from './InternalLinkMenu';

export default function NavBar() {
    return (
        <div className={clsx('w-full flex justify-between items-center', PAGE_PADDING_X)}>
            <EmblemLink />
            <nav>   
                <InternalLinkMenu isHeaderNav={true} />
            </nav>
        </div>
    )
}