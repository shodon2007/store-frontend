import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.tsx";
import { router } from "./router/index.ts";

import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
    return (
        <div className="app">
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
        </div>
    );
};

export default App;
