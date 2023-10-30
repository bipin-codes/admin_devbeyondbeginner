// ROUTE THAT SHOWS UP WHEN NO CHILD ROUTE IS SELECTED

import Card, { CardDetails } from 'common/Card';

const cardDetailsDummy: Array<CardDetails> = [
    {
        title: 'MOST RECENT POST',
        description: '📝 How do setup mac for development',
        value: '2023-10-01',
        link: 'https://google.com',
    },
    {
        title: 'Views',
        description: '👀 Total views on your blogs',
        value: '10',
    },
    {
        title: 'Most viewed',
        description: '🔥 Total views and counting...',
        value: '1000+',
        link: 'https://google.com',
    },
    {
        title: 'Total comments',
        description: '💬 Total comments',
        value: '100',
    },
    {
        title: 'Most commented',
        description: '🔥 Total comments and counting...',
        value: '10000',
    },
    {
        title: 'Views',
        description: 'Total views on your blogs',
        value: '10',
    },
];

const Default = () => {
    return (
        <div className="flex flex-col justify-start items-center h-full space-y-32 overflow-y-scroll p-5">
            {/* header div */}
            <div className="text-center space-y-5">
                <p className="text-3xl">Welcome to devbeyondbeginner, Admin!</p>
                <p className="text-xl">Let's write something knowledgeable!</p>
            </div>
            {/* content div */}
            <div className="flex-1 space-y-20 self-start">
                <p className="text-2xl text-gray-800 font-medium">
                    Some stats about
                    <span className="text-blue-400 text-3xl"> devbeyondbeginner</span>.
                </p>
                <div className="flex flex-wrap justify-around items-center gap-20">
                    {cardDetailsDummy.map((detail) => (
                        <Card {...detail} key={detail.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Default;
