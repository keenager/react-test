import { Link } from 'react-router-dom';

function Movie({id, coverImg, title, genres, summary }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <p>{summary}</p>
        </div>
    )
}

export default Movie