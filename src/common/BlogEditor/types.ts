import { IBlog } from 'app/slices/blogs/types';

export interface IBlogEditorProps {
    onSave: (blog: IBlog) => void;
    onClose: () => void;
    editing: { blog: IBlog | undefined };
}
