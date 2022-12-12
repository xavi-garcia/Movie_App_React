import { useEffect } from "react";

function Filter ({popular, setFiltered, activeGenre, setActiveGenre}) {
    useEffect(()=>{
        if(activeGenre === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
        setFiltered(filtered)
    },[activeGenre])


    return (
        <ul className="filter-container">
            <li id="logo">CineFlix</li>
            <li><button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}>Action</button></li>
            <li><button className={activeGenre === 878 ? "active" : ""} onClick={() => setActiveGenre(878)}>Sci-Fi</button></li>
            <li><button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button></li>
        </ul>
    )
}

export default Filter;