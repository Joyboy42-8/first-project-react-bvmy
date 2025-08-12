import './App.css';
import Superheroes from './components/Superheroes/Superheroes';
import Superhero from "./components/Superheroes/Superhero/Superhero"
import { useState } from 'react';

export default function App() {
  const [favorite, setFavorite] = useState();
  return (
    <main>
      <h1>MARVEL</h1>
      <Superheroes>
        {/* Superhero numéro 1 */}
        <Superhero name="Iron Man" description="Tony Stark, un génie milliardaire, inventeur et philanthrope, utilise une armure high-tech pour combattre le mal et protéger le monde." details="Anthony « Tony » Stark, alias Iron Man (litt. « l'Homme de fer ») est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee, développé par Larry Lieber et conçu par les dessinateurs Don Heck et Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Tales of Suspense (vol. 1) en mars 1963, scénarisé par Larry Lieber et dessiné par Don Heck.
        À partir de 1968, le personnage a son propre comic, The Invincible Iron Man, publié par Marvel jusqu'en 1996 avec le no 332.
        Au début de sa carrière de super-héros, Tony Stark avait pour principale occupation de lutter contre les communistes dans le contexte de la guerre froide, de manière beaucoup plus systématique que les autres personnages de Marvel Comics. Ce cadre historique a progressivement disparu, au profit d'aventures de science-fiction. Le contexte de la série Iron Man a ensuite continué d'évoluer avec les années, le personnage affrontant en majorité des menaces de type technologique." films={["Iron Man 1", "Iron Man 2", "Iron Man 3"]} img={"/src/assets/Iron.png"} isFavorite = {favorite == "Iron Man"}/>
        {/* Superhero numéro 2 */}
        <Superhero name="Loki" description="Loki, le dieu de la malice, est un maître du déguisement et de la tromperie. Il utilise ses pouvoirs pour semer le chaos et défier les héros." details="Loki, également connu sous le nom de Loptr, Hveðrungr ou encore Loge (dans la tétralogie de Wagner), est un des dieux principaux du panthéon de la mythologie nordique.
        Appartenant aux groupes des Aesir, Loki est le dieu de la malice, de la discorde et des illusions.
        Il est le fils du géant Farbauti et de Laufey, ainsi que le père de plusieurs monstres : le serpent Jörmungand, le loup Fenrir et la déesse du monde des morts Hel. Il est également la mère du cheval d'Odin à huit jambes Sleipnir. Malgré ses origines, il est accueilli dans le panthéon divin des Ases par Odin.
        Loki est capable de métamorphose ; il est aussi impulsif et irresponsable que malin et rusé. Les Aesir ont souvent recours à lui pour régler des problèmes dont il est bien souvent lui-même la cause. De nature fondamentalement négative et traître, sa jalousie l'amène à causer la mort du dieu Baldr. Furieux, les Ases le punissent en l'attachant avec les entrailles d'un de ses fils sous un serpent dont le venin goutte sur son visage. Il en sera ainsi jusqu'à la fin prophétique du monde, le Ragnarök, où Loki se libèrera et mènera les géants à l'assaut contre les dieux et les hommes. Loki et son dieu opposé, Heimdall, s'entretueront pendant la bataille." films={["Avengers"]} img={"/src/assets/Loki.jpg"} isFavorite = {favorite == "Loki"}/>
        {/* Superhero numéro 3 */}
        <Superhero name="Captain America" description="Steve Rogers, un soldat de la Seconde Guerre mondiale, est le symbole de la liberté et de la justice. Avec son bouclier indestructible, il combat les forces du mal." details="Steven « Steve » Rogers, alias Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Joe Simon et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Captain America Comics #1, paru en décembre 1940 mais avec la date de mars 1941 inscrite sur la couverture.
        Doté d'une condition physique au summum du potentiel humain, Captain America est un combattant hors pair, un chef-né et un stratège militaire accompli. Il porte un costume reconnaissable entre tous, inspiré du drapeau américain et est équipé d'un bouclier quasi indestructible, composé d'un alliage d'acier et du fictif vibranium, qu'il utilise comme une protection ainsi que comme une arme.
        Depuis les années 1960, Captain America fait partie de l'équipe de super-héros les Vengeurs (Avengers, et ses diverses versions) dont il est devenu au fil des ans l’un des piliers." isFavorite = {favorite == "Captain America"}/>
      </Superheroes>
    </main>
  );
}