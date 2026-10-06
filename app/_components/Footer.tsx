import EmblemLink from './EmblemLink';
import InternalLinkMenu from './InternalLinkMenu';
import ThemeSettings from './ThemeSettings';
import ExternalLinkMenu from './ExternalLinkMenu';

export default function Footer() {
    return (
        <div className="w-full">
            <div className='w-full flex flex-col gap-5 md:grid md:grid-cols-[40%_auto_auto]'>
                <div className="flex flex-col gap-5">
                    <EmblemLink widthNHeight={64} />
                    <p>Build tools people want to use.</p>
                    <ThemeSettings />
                </div>
                <div className="grow flex flex-col gap-1">
                    <div className="text-sm uppercase px-3">Pages</div>
                    <InternalLinkMenu isHeaderNav={false} />
                </div>
                <div>
                    <div className="text-sm uppercase px-3">Other Links</div>
                    <ExternalLinkMenu isFooterMenu={true} />
                </div>
            </div>
            <small className='block font-bold mt-5 md:mt-10'>&copy; 2026 Josephine Cortez-Ayala</small>
        </div>
    );
}