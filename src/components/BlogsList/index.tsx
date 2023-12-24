import { useAppDispatch, useAppSelector } from 'app/hooks';
import { allBlogsForAdmin, remove } from 'app/slices/blogs';
import DeleteButton from 'common/DeleteButton';
import Icon from 'common/Icon';
import { useState } from 'react';
import { IBlogListProps, IBlogProps } from './types';

const Blog: React.FC<IBlogProps> = ({ blog, onEdit }) => {
    const [expanded, setExpanded] = useState(false);
    const dispatch = useAppDispatch();

    const onDeleteHandler = () => {
        dispatch(remove({ id: blog.id }));
    };

    const onToggleCollapse = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="bg-gray-100 rounded-lg flex flex-col border-2 p-5 shadow-md my-5">
            <div className="flex align-middle justify-between">
                <p className={'self-center font-bold text-xl'}>
                    {blog.title}
                    {blog.additionalLinks &&
                        blog.additionalLinks.length > 0 && (
                            <span className="self-center text-xl ml-2 font-normal text-gray-500">
                                (has {blog.additionalLinks?.length} links)
                            </span>
                        )}
                </p>

                <div className="gap-5 flex">
                    <button
                        type="button"
                        className="action-button p-1"
                        onClick={() => {
                            onEdit(blog);
                        }}
                    >
                        <Icon name="Edit" size={16} />
                    </button>
                    <DeleteButton
                        confirmationMessage="Delete this blog?"
                        onDelete={onDeleteHandler}
                    />
                </div>
            </div>
            <div className="inline">
                <div
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                    className={`text-lg mt-4 ${expanded ? '' : 'line-clamp-2'}`}
                ></div>
                <span
                    className="text-blue-300 lowercase hover:cursor-pointer"
                    onClick={onToggleCollapse}
                >
                    {expanded ? 'less... ' : 'more...'}
                </span>
            </div>
            <div className="mt-4 flex gap-x-5">
                {blog.categories.map((category, idx) => (
                    <span
                        key={idx}
                        className="bg-blue-300 px-4 py-2 text-white italic rounded-md"
                    >
                        {category}
                    </span>
                ))}
            </div>
        </div>
    );
};

const BlogsList: React.FC<IBlogListProps> = ({ onBlogEditHandler }) => {
    const blogs = useAppSelector(allBlogsForAdmin);

    return (
        <div>
            {blogs.map((blog) => (
                <Blog key={blog.id} blog={blog} onEdit={onBlogEditHandler} />
            ))}
        </div>
    );
};

export default BlogsList;
