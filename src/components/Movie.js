import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({ id, coverImg, title, genres, summary }) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((genre) => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Movie