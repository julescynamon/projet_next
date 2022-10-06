import Link from 'next/link';

export default function Home() {
	return (
		<div className="container px-4 pt-5">
			<h1>Bienvenue sur Code IO</h1>
			<p>Comunauté des afficianados du developpement web</p>

			<div className="row mt-5">
				<div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
					<div className="card w-100 h-100">
						<div className="card-body">
							<h5 className="card-title">Les derniers articles</h5>
							<h6 className="card-subtitle mb-2 text-muted">
								Maximiser votre culture web
							</h6>
							<p className="card-text">Chaque auteur tente de vous apporter le plus de valeur par article.</p>
							<Link href="/blog">
								<a className="btn btn-primary">Voir les articles</a>
							</Link>
							</div>
					</div>
				</div>
				<div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
					<div className="card w-100 h-100">
						<div className="card-body">
							<h5 className="card-title">Faites un tour vrs la liste de membres</h5>
							<h6 className="card-subtitle mb-2 text-muted">
								Faites vous des amis
							</h6>
							<p className="card-text">Ajoutez, invitez, discutez avec differents membres.</p>
							<Link href="/utilisateurs">
								<a className="btn btn-primary">Découvre la liste de membres</a>
							</Link>
							</div>
					</div>
				</div>
			</div>
		</div>
	)
}
