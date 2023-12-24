import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { IBlog, IBlogDetail } from './types';

const initialState: Array<IBlog> = [
    {
        id: v4(),
        title: 'First blog',
        categories: ['Testing', 'Node.JS'],
        content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sine ea igitur iucunde negat posse se vivere? Quid, quod res alia tota est? <strong>Cur post Tarentum ad Archytam?</strong> <strong>Duo Reges: constructio interrete.</strong> Quodsi ipsam honestatem undique pertectam atque absolutam. Ratio quidem vestra sic cogit. An me, inquam, nisi te audire vellem, censes haec dicturum fuisse?</p>
    <p>Falli igitur possumus. Sed quot homines, tot sententiae; Haec para/doca illi, nos admirabilia dicamus.</p>
    <p>Itaque in rebus minime obscuris non multus est apud eos disserendi labor. Ex eorum enim scriptis et institutis cum omnis doctrina liberalis, omnis historia. <a href="http://loripsum.net/" target="_blank" rel="noopener">An tu me de L.</a></p>`,
        isFeatured: true,
        additionalLinks: ['1', '2'],
    },
];

export const blogsSlice = createSlice({
    initialState,
    name: 'blogs',
    reducers: {
        create: (state, action: PayloadAction<IBlogDetail>) => {
            console.log(action.payload);
            state.push({ id: v4(), ...action.payload });
        },

        remove: (state, action: PayloadAction<Pick<IBlog, 'id'>>) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
                toast.success(`Blog deleted successfully!`, { icon: null });
            }
        },

        update: (state, action: PayloadAction<IBlog>) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { create, remove, update } = blogsSlice.actions;

export const blogCount = (state: RootState) => state.blogs.length;

export const allBlogs = (state: RootState) => state.blogs;

export const allBlogsForAdmin = createSelector(allBlogs, (data) =>
    data.map((x) => ({
        ...x,
        content: x.content.replace(
            /<img(.*?)src=['"](.*?)['"](.*?)>/g,
            (_, _p1, p2) => {
                return (
                    '<a style="font-style: italic;text-decoration: underline;" href=\'' +
                    p2 +
                    "'>Link to Image</a>"
                );
            }
        ),
    }))
);

export default blogsSlice.reducer;
