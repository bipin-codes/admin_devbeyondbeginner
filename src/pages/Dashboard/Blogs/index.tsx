import Portal from 'common/Portal';
import { useState } from 'react';
import { MultiValue, SingleValue } from 'react-select';

import { create, update } from 'app/slices/blogs';
import BlogEditor from 'common/BlogEditor';
import CategoriesSelector, { Option } from 'common/CategoriesSelector';
import { useAppDispatch } from 'app/hooks';
import BlogsList from 'components/BlogsList';
import Icon from 'common/Icon';
import { IBlog } from 'app/slices/blogs/types';

const Blogs = () => {
    const dispatch = useAppDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [editing, setEditing] = useState<{ blog: IBlog | undefined }>({
        blog: undefined,
    });

    const createBlogHandler = () => {
        setIsOpen(!isOpen);
    };

    const onBlogSave = (blog: IBlog) => {
        setIsOpen(false);
        if (!editing.blog) {
            dispatch(create({ ...blog }));
        } else {
            dispatch(update({ ...blog }));
        }
    };

    const onBlogEditorClose = () => {
        setIsOpen(false);
        setEditing({ blog: undefined });
    };

    const onFilterCategorySelected = (
        option: SingleValue<Option> | MultiValue<Option>
    ) => {
        console.log(option);
    };

    const onBlogEditHandler = (blog: IBlog) => {
        setIsOpen(true);
        setEditing({ blog });
    };

    return (
        <div className="flex-col between p-5 justify-between space-y-5 relative">
            <div className="flex items-stretch flex-1 ">
                <input
                    type="text"
                    placeholder="search blog by title"
                    className="px-6 py-4 rounded-lg bg-gray-200 outline-none flex-1 text-2xl text-gray-800 focus:shadow-md"
                />
                <button className="action-button w-md flex justify-center align-middle ml-5">
                    <Icon name="Search" />
                </button>
            </div>

            <CategoriesSelector
                placeholderMessage="Select blog categories to filter..."
                allowMultipleValues={true}
                onValueSelected={onFilterCategorySelected}
            />

            <button onClick={createBlogHandler} className="action-button">
                Create blog
            </button>

            <Portal isOpen={isOpen}>
                <BlogEditor
                    editing={editing}
                    onClose={onBlogEditorClose}
                    onSave={onBlogSave}
                />
            </Portal>

            <BlogsList onBlogEditHandler={onBlogEditHandler} />
        </div>
    );
};
export default Blogs;
