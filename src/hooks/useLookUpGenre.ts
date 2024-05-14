import useGenres from "./useGenres";

const useLookUpGenre = (id?: number) => {
    const { data: genres} = useGenres();
    return genres?.results.find(g => g.id === id);
}
 
export default useLookUpGenre;