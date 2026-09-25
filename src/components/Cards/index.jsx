import styles from './styles.module.css';

export default function Card({ title, releaseYear, description, coverImage }) {
  const handleSearch = () => {
    // Pesquisa no Google usando o título do jogo
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(title)}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={coverImage} alt={title} className={styles.cover} />
      </div>
      
      <div className={styles.info}>
        <h3 className={styles.title}>
          {title} <span className={styles.year}>({releaseYear})</span>
        </h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={handleSearch}>
          Saiba mais
        </button>
      </div>
    </div>
  );
}