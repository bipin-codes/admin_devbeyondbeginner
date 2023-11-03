import CategoriesSelector from 'common/CategoriesSelector';
import Portal from 'common/Portal';
import { useState } from 'react';

const Blogs = () => {
    const [isOpen, setIsOpen] = useState(false);

    const createBlogHandler = () => {
        setIsOpen(!isOpen);
    };

    const onSave = () => {};
    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex-col between p-5 justify-between space-y-5 relative">
            <div className="flex items-stretch flex-1 ">
                <input
                    type="text"
                    placeholder="search blog by title"
                    className="px-6 py-4 rounded-lg bg-gray-200 outline-none flex-1 text-2xl text-gray-800 focus:shadow-md"
                />
                <div className="flex items-center justify-center px-6 py-4 ml-3 rounded-lg bg-blue-400 animated-button border-2 border-blue-500">
                    <span className="text-blue-800 text-xl font-bold">Search</span>
                </div>
            </div>

            <CategoriesSelector placeholderMessage="Select blog categories to filter..." allowMultipleValues={true} />

            <button
                onClick={createBlogHandler}
                className="text-xl self-end px-6 py-4 bg-blue-400 border-2 border-blue-500 font-bold text-blue-800 rounded-lg flex-1 animated-button"
            >
                Create blog
            </button>
            <Portal isOpen={isOpen} onSave={onSave} onClose={onClose} />
        </div>
    );
};
export default Blogs;
