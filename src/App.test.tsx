import "@testing-library/jest-dom";
import App from "./App";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ReactQuery from "./components/ReactQuery";

test("demo", () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ReactQuery>
                    <App />
                </ReactQuery>
            </MemoryRouter>
        </Provider>
    );
    expect(true).toBe(true);
});
