import React, {useReducer} from 'react'


// const ACTIONS_REDUCER = {
//  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
//  ...state,
//  keyword: action.payload,
//  times: state.times + 1
// }),
//  [ACTIONS.UPDATE_RATING]: (state, action) => ({
//  ...state,
//  rating: action.payload,
// })
// }

const ACTIONS = {
    UPDATE_KEYWORD: "update_keyword",
    UPDATE_RATING: "update_rating",
};

const REDUCER = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
                times: state.times + 1,
            };
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload,
                times: state.times + 1,
            };
        default:
            return state;
    }
};


export default function useForm({ initialKeyword, initialRating }) {
    const [state, dispatch] = useReducer(REDUCER, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        times: 0,
    });

    const { keyword, rating, times } = state;

    return {
        keyword,
        rating,
        times,
        updateKeyword: (keyword) =>
            dispatch({
                type: ACTIONS.UPDATE_KEYWORD,
                payload: keyword,
            }),
        updateRating: (rating) =>
            dispatch({
                type: ACTIONS.UPDATE_RATING,
                payload: rating,
            }),
    };
};

