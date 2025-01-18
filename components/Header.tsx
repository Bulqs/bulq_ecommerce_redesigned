import Navigation from './headernav/Navigation';
import TopBar from './headernav/TopBar';

export const Header: React.FC = () => {
   
    return (
        <header className="bg-appWhite shadow-sm lg:static lg:overflow-x-hidden top-0 right-0 left-0">
            <div className="bg-appNav w-full py-0">
                <div className="absolute flex flex-col justify-between bg-appTitleBgColor w-full z-50 border-b-2 border-white">
                    <TopBar />
                    <Navigation />
                </div>
            </div>
        </header>
    );
};
