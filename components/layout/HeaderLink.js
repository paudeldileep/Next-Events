import Link from 'next/link';

const HeaderLink = ({ Icon, title, link }) => {
    return (
        <div className="mx-4 px-2 py-[2px]  hover:shadow-md rounded-md transform transition hover:scale-110">

            <Link
                href={link}
            >
                <a><span className="inline-flex h-10 text-gray-200 sm:hidden" ><Icon className="h-10 w-10"/></span><span className="hidden h-10 font-semibold text-gray-200 sm:inline-flex">{title}</span></a>
            </Link>
        </div>
    );
};

export default HeaderLink;
