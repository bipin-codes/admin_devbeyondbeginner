import { Editor } from '@tinymce/tinymce-react';
import { IBlog } from 'app/slices/blogs/types';

import CategoriesSelector, { Option } from 'common/CategoriesSelector';
import { ChangeEvent, FC, useState } from 'react';
import { IBlogEditorProps } from './types';
import ListItem from 'common/ListItem';
import { IListItem } from 'common/ListItem/types';
import { toast } from 'react-toastify';

const BlogEditor: FC<IBlogEditorProps> = ({ onClose, onSave, editing }) => {
    const editOptions = {
        plugins: 'lists link image emoticons codesample preview',
        toolbar:
            'preview | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image codesample| emoticons',
        menubar: 'insert | format',
        resizable: false,
    };

    const [editorState, setEditorState] = useState(
        editing?.blog?.content ?? ''
    );
    const [blogTitle, setBlogTitle] = useState(editing?.blog?.title ?? '');

    const [targetCategory, setTargetCategory] = useState<string[]>(
        editing?.blog?.categories ?? []
    );

    const [linkValue, setLinkValue] = useState('');
    const [links, setLinks] = useState<string[]>(
        editing.blog?.additionalLinks ?? []
    );

    const onEditorChangeHandler = (value: string) => {
        setEditorState(value);
    };

    const onCloseHandler = () => {
        if (editorState) {
            const confirmation = window.confirm(
                'Are you sure you want to close editing!'
            );
            if (confirmation) onClose();
        } else {
            onClose();
        }
    };

    const onSaveHandler = () => {
        const blog: IBlog = {
            categories: targetCategory,
            content: editorState,
            isFeatured: editing.blog ? editing.blog.isFeatured : false,
            title: blogTitle,
            additionalLinks: links,
            id: editing.blog ? editing.blog.id : '',
        };
        onSave(blog);
    };

    const onCategorySelected = (options: Array<Option>) => {
        setTargetCategory(options.map((x) => x.value));
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setBlogTitle(event.target.value);
    };

    const onAddLinkHandler = () => {
        // don't add duplicate links ...
        if (links.findIndex((x) => x === linkValue) !== -1) {
            toast('Link already exists!');
            return;
        }

        setLinks([...links, linkValue]);
        setLinkValue('');
    };

    const onDeleteLinkHandler = (item: IListItem) => {
        const toDelete = item as string;
        setLinks([...links.filter((x) => x !== toDelete)]);
    };
    const onEditLinkHandler = (oldVal: IListItem, newVal: IListItem) => {
        const updated = links.map((link) => {
            return link === oldVal ? (newVal as string) : link;
        });

        setLinks([...updated]);
    };

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <p className="text-center flex-1 text-3xl font-extrabold text-blue-500">
                    WRITE SOMETHING GREAT!
                </p>
                <div className="flex gap-x-5 text-white text-xl">
                    <button
                        className="px-3 py-3 rounded-md bg-blue-400"
                        type="button"
                        onClick={onSaveHandler}
                    >
                        Save
                    </button>
                    <button
                        className="px-3 py-3 rounded-md bg-red-400"
                        type="button"
                        onClick={onCloseHandler}
                    >
                        Close
                    </button>
                </div>
            </div>
            <input
                type="text"
                onChange={onChangeHandler}
                placeholder="Title for the blog..."
                value={blogTitle}
            />
            <Editor
                apiKey="r16ryta4e8ofxtmg7nlbpoc8y2ggmgu9o40owdl9k2xwdqhn"
                init={{
                    ...editOptions,
                    height: '100%',
                    content_css: 'tinymce-5',
                    resize: false,
                }}
                value={editorState}
                onEditorChange={onEditorChangeHandler}
            />
            <CategoriesSelector
                values={editing.blog?.categories.map((category) => ({
                    value: category,
                    label: category,
                }))}
                allowMultipleValues={true}
                placeholderMessage="Select Category to put this blog under..."
                onValueSelected={onCategorySelected}
            />

            <div className="flex flex-row justify-between items-stretch gap-x-5">
                <input
                    value={linkValue}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                        setLinkValue(target.value);
                    }}
                    className="flex-1"
                    placeholder="Link to another article"
                />
                <button className="action-button" onClick={onAddLinkHandler}>
                    Add Link
                </button>
            </div>
            <div>
                {links.map((x, idx) => (
                    <ListItem
                        key={idx}
                        item={x}
                        onDeleteHandler={onDeleteLinkHandler}
                        onEditHandler={onEditLinkHandler}
                    ></ListItem>
                ))}
            </div>
        </>
    );
};

export default BlogEditor;
