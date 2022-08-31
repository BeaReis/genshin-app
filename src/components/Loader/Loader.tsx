import { FC } from "react";
import "./Loader.sass";

type Props = {
    isLoading: Boolean;
}

const Loader: FC<Props> = ({ isLoading }: Props) => {
    let state = "";
    if(isLoading) state = "load--status";

    return(
        <div className={`load ${state}`}></div>
    )
}

export default Loader;