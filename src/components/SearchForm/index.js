import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";


const RATINGS = ["g", "pg", "pg-13", "r"];


function SearchForm({ initialKeyword = "", initialRating = "g" }) {
    // const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
    // const [times, setTimes] = useState(0)
    // const [rating, setRating] = useState(initialRating);

    const { keyword, rating, updateKeyword, updateRating } = useForm({
        initialKeyword,
        initialRating,
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`);
    };
    const handleChange = (evt) => {
        updateKeyword(evt.target.value);
    };

    const handleChangeRating = (evt) => {
        updateRating(evt.target.value);
    };

    const [_, pushLocation] = useLocation();
    return (
        <form
            className='text-center flex justify-center'
            onSubmit={handleSubmit}
        >
            <button type='submit' className=' bg-green-400 p-1 rounded-l'>
                Search
            </button>
            <input
                placeholder='a gif here...'
                className='p-1 outline-none'
                onChange={handleChange}
                type='text'
                value={keyword}
            />
            <select
                className='p-1 rounded-r border-l-2 outline-none'
                value={rating}
                onChange={handleChangeRating}
            >
                <option disabled>Rating type</option>
                {RATINGS.map((rating) => (
                    <option key={rating}>{rating}</option>
                ))}
            </select>
        </form>
    );
}

export default React.memo(SearchForm);
