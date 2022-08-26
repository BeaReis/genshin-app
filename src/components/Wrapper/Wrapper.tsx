import { FC } from "react";
import "./Wrapper.sass";

type Props = {
    children: React.ReactNode;
}

const Wrapper: FC<Props> = ({ children }: Props) => {
  
    return (
      <div className="wrapper-grid">
        { children }
      </div>
    );
  };
  
  export default Wrapper;
  