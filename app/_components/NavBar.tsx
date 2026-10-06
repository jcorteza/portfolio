import EmblemLink from './EmblemLink';
import InternalLinkMenu from './InternalLinkMenu';

export default function NavBar() {
    return (
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-center">
            <EmblemLink />
            <nav className='w-full md:w-auto'>   
                <InternalLinkMenu isHeaderNav={true} />
            </nav>
        </div>
    )
}