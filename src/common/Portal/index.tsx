import { Editor } from '@tinymce/tinymce-react';
import CategoriesSelector from 'common/CategoriesSelector';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC<{ isOpen: boolean; onSave: () => void; onClose: () => void }> = ({ isOpen, onSave, onClose }) => {
    const editOptions = {
        plugins: ' lists link image emoticons code',
        toolbar:
            'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image | emoticons code',
        menubar: 'insert | format',
        resizable: false,
    };

    const [editorState, setEditorState] = useState('');

    const onEditorChangeHandler = (value: string) => {
        setEditorState(value);
    };
    const onCloseHandler = () => {
        if (editorState) {
            const confirmation = window.confirm('Are you sure you want to close editing!');
            if (confirmation) onClose();
        } else {
            onClose();
        }
    };
    useEffect(() => {
        setEditorState('');
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed top-0 left-0 h-full w-full justify-center items-stretch bg-gray-300 bg-opacity-20 z-10  p-5">
            <div className="flex flex-col p-10 rounded-xl bg-gray-200 gap-y-5 h-full">
                <label className="text-2xl font-medium">Blog Content</label>
                <Editor
                    apiKey="r16ryta4e8ofxtmg7nlbpoc8y2ggmgu9o40owdl9k2xwdqhn"
                    init={{ ...editOptions, height: '100%', content_css: 'tinymce-5', resize: false }}
                    value={editorState}
                    onEditorChange={onEditorChangeHandler}
                />
                <CategoriesSelector allowMultipleValues={false} placeholderMessage="Select Category to put this blog under..." />
                <div className="flex gap-x-5 text-white text-xl">
                    <button className="px-3 py-3 rounded-md bg-blue-400" type="button" onClick={onSave}>
                        Save
                    </button>
                    <button className="px-3 py-3 rounded-md bg-red-400" type="button" onClick={onCloseHandler}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Portal;
