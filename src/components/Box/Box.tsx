import { FC } from "react";


const Box: FC<string> = (name: string) => {
    return (
        <div className="color">
            {name}
        </div>
    )
}

export default Box;