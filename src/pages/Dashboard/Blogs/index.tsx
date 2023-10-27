import Select from 'react-select';

const selectOptions = [
    { value: 'nodejs', label: 'nodejs' },
    { value: 'express', label: 'express' },
    { value: 'serverless framework', label: 'serverless' },
    { value: 'react', label: 'react' },
    { value: 'cloud', label: 'cloud' },
    { value: 'frontend', label: 'frontend' },
];
const Blogs = () => {
    return (
        <div className="flex-col between p-5 justify-between space-y-5">
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

            <Select
                placeholder="Select blog categories to filter..."
                closeMenuOnSelect={false}
                isMulti
                options={selectOptions}
                className="outline-none"
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        border: '1px solid grey',
                        outline: 'none',
                        ':active': {
                            outline: 'none',
                            border: 'none',
                            boxShadow: 'none',
                        },
                    }),

                    multiValueLabel: (baseStyles) => ({
                        ...baseStyles,
                        width: '10rem',
                        fontSize: '1.2rem',
                    }),
                    placeholder: (baseStyles) => ({
                        ...baseStyles,
                        fontSize: '1.2rem',
                    }),
                }}
            />

            <button className="text-xl self-end px-6 py-4 bg-blue-400 border-2 border-blue-500 font-bold text-blue-800 rounded-lg flex-1 animated-button">
                Create blog
            </button>
        </div>
    );
};

export default Blogs;
