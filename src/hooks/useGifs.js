import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: null }) {
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const { gifs, setGifs } = useContext(GifContext);

    // Recupero la keyword del localStorage
    const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "random";

    useEffect(
        function () {
            setLoading(true);
            getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
                setGifs(gifs);
                setLoading(false);
                // Guardo la keyword del localStorage
                localStorage.setItem("lastKeyword", keyword);
            });
        },
        [keyword, keywordToUse, rating, setGifs ]
    );

    useEffect(
        function () {
            if (page === INITIAL_PAGE) return;
            setLoadingNextPage(true);
            getGifs({ keyword: keywordToUse, rating, page }).then((nextGifs) => {
                setGifs((prevGifs) => prevGifs.concat(nextGifs));
                setLoadingNextPage(false);
            });
        },
        [keywordToUse, rating, page, setGifs]
    );

    return { loading, loadingNextPage, gifs, setPage };
}
