import "./Superhero.css";
import { useState } from "react";

export default function Superhero({
    name, 
    description, 
    films = ["Aucun film pour ce superhéros"],
    details,
    isFavorite,
    img = "/src/assets/default.png"}) {
        // Un composant ne s'éxécute qu'une seule fois  : au début et à chaque modification
    const [show, setShow] = useState(false);
    return(
        <>
            <div className="superhero `${isFavorite && isFavorite == name}`">
                <img src={img} alt={`${name} Photo`} />
                <h2>{name}</h2>
                <p>{description}</p>
                {/* Les Details */}
                <div className="readMore" onClick={() => setShow((preview) => !preview)}>{show ? "Masquer les détails" : "En savoir plus..."}</div>
                {show ? (
                    <div style={{ 
                            whiteSpace: "pre-line",
                            textAlign: "justify",
                            marginBottom: "30px",
                            fontStyle: "italic"
                        }} className="show">
                        {details}
                    </div>
                ) : null}
                
                {/* Les Films */}
                <div>
                    <b>Mes Films</b>
                    <ul>
                        {films.map((film) => ( 
                            <li key={film}>{film}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}