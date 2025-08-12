import "./Superheroes.css";

export default function Superheroes(props) {
    return (
        <div className="superheroes"> 
            {props.children}
        </div>
    );
}