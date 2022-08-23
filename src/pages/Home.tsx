import { FC } from "react";
import getAll from "../services/getAll";

const Home: FC = () => {

    
    getAll("https://api.genshin.dev/characters/albedo");


    return(
        <></>
    )
}

export default Home;