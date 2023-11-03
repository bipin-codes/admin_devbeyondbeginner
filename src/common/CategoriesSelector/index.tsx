import Select from 'react-select';

const CategoriesSelector: React.FC<{ placeholderMessage: string; allowMultipleValues: boolean }> = ({ placeholderMessage, allowMultipleValues }) => {
    const selectOptions = [
        { value: 'nodejs', label: 'nodejs' },
        { value: 'express', label: 'express' },
        { value: 'serverless framework', label: 'serverless' },
        { value: 'react', label: 'react' },
        { value: 'cloud', label: 'cloud' },
        { value: 'frontend', label: 'frontend' },
    ];
    return (
        <Select
            placeholder={placeholderMessage}
            menuPlacement="auto"
            closeMenuOnSelect={!allowMultipleValues} //disable when multiple values can be selected...
            isMulti={allowMultipleValues}
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
    );
};

export default CategoriesSelector;
