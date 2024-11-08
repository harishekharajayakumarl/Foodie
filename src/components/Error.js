import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOPS, Something went Wrong!!</h1>
        </div>
    );
};
export default Error;