

export default function article(props) {


    return (
        <div className="container px-4 pt-5">
            <h1 className="text-center">{props.user.username}</h1>
            <p className="text-center">{props.user.name}</p>
            <p className="text-center">{props.user.email}</p>
        </div>  
    )
}


// getStaticProps pour retrourner les données de l'article

export async function getStaticProps(context) {
    const id = context.params.user;

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await data.json();

    return {
        props: {
            user
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
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    const paths = users.map((user) => ({
        params: {
            user: user.id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}