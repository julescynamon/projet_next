

export default function article(props) {


    return (
        <div className="container px-4 pt-5">
            <h1 className="text-center">{props.article.title}</h1>
            <p className="text-center">{props.article.body}</p>
        </div>  
    )
}


// getStaticProps pour retrourner les données de l'article

export async function getStaticProps(context) {
    const id = context.params.article;

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const article = await data.json();

    return {
        props: {
            article
        }
    }
}


// getStaticPaths pour une page dynamique

// getStaticPaths est une fonction qui permet de générer les différentes routes de la page dynamique
// getStaticPaths est une fonction asynchrone qui retourne un objet avec une propriété paths
// paths est un tableau d'objets qui contient une propriété params
// params est un objet qui contient une propriété id
// id est une chaîne de caractères qui correspond à l'id de l'article


export async function getStaticPaths() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await data.json();

    const paths = articles.map((item) => ({
        params: {
            article: item.id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}
