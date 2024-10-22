


import { BottomWarning } from "../../components/BottomWarning";

export const Home = () => {

  return (
    <div>
    <BottomWarning label={"create a todo "}
              buttonText={"Add"}
              to={"/createtodo"}></BottomWarning>
    
    </div>
  );
};
