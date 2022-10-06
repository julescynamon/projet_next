import Link from 'next/link';
import {v4 as uuidv4 } from 'uuid';

export default function index(props) {



    return (
        <div className="container px-4 py-5">
            <h1 className="text-center">Bienvenue sur le blog.</h1>
            <p className="text-center">Voici les articles</p>

            <div className="row mt-4 g-3">
                {props.articles.map((article) => (
                    <div key={uuidv4()} className="col-12 col-md-6 col-xl-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.body.slice(0,20) + ' ...'}</p>
                                <Link href={`/blog/${article.id.toString()}`}>
                                    <a className="card-link">Voir l'article</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}

// getStaticProps par ce que c'est une page statique
// getStaticProps est une fonction asynchrone qui retourne un objet avec une propriété props
// props est un objet qui contient une propriété articles
// articles est un tableau d'objets qui contient les articles


export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await data.json();

    return {
        props: {
            articles
        }
    }
}