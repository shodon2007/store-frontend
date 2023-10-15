import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.tsx";
import { router } from "./router/index.ts";

import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {router.map((routeItem) => {
                    return (
                        <Route
                            key={routeItem.path}
                            path={routeItem.path}
                            index={routeItem.index}
                            element={<routeItem.component />}
                        />
                    );
                })}
            </Route>
        </Routes>
    );
};

export default App;
