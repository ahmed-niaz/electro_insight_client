import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <main className="font-outfit">
          <Outlet/>
        </main>
    );
};

export default Root;