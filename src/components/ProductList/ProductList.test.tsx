import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { IProduct } from "../../types/product";
import { MemoryRouter } from "react-router-dom";
import { getProducts } from "../../API/fetchProducts";
import { TypeForm } from "../../types/side";

const form: TypeForm = {
    filter: {},
    brands: [],
    price: { min: 0, max: 1000000 },
    sort: "name",
};

describe("Testing Product List", () => {
    test("Testing empty List", () => {
        const itemList: IProduct[] = [];
        render(<ProductList itemList={itemList} />);
        const emptyTitle = screen.getByRole("heading");
        expect(emptyTitle).not.toBeNull();
        expect(emptyTitle).toMatchSnapshot();
    });
    test("Testing item phones", async () => {
        const { data } = await getProducts("phones", form);

        render(
            <MemoryRouter>
                <ProductList itemList={data} />
            </MemoryRouter>
        );

        screen.debug();

        const links = screen.getAllByRole("link");
        expect(links.length).toBe(data.length);
        links.forEach((item) => {
            expect(item).not.toBeNull();
            expect(item).toMatchSnapshot();
        });
    });
});
