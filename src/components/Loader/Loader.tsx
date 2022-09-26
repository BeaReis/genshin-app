import { FC } from "react";
import "./Loader.sass";

type Props = {
  isLoading: boolean;
}

const Loader: FC<Props> = ({ isLoading }: Props) => {
  let display = "";
  if(isLoading) display = "display";

  return <div className={`loader ${display}`}></div>;
};

export default Loader;
