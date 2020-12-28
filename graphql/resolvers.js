import {getMovies/*, getById, addMovie, deleteMovie*/} from "./db"

const resolvers = {
    Query: {
        // movies:() => getMovies(),
        movies:(_,{limit,rating}) => getMovies(limit,rating),
        // movie:(_,{id}) => getById(id)
    },
    // Mutation: {
    //     addMovie: (_, {name, score}) => addMovie(name, score),
    //     deleteMovie: (_,{id}) => deleteMovie(id)
    // }
};

export default resolvers;