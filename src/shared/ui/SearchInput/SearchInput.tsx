import './SearchInput.scss'


type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};


export function SearchInput({value, onChange} : SearchInputProps){



    return (
        <input value={value}
            onChange={(e) => {onChange(e.target.value)}}
            placeholder='Что-то ищете?'
            className='search-input'
        />
    )
}