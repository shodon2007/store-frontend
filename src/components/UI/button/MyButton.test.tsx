import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MyButton from "./MyButton";

describe("testing mybutton", () => {
    test("Тестируем с значением", () => {
        render(<MyButton children={"это кнопочка"} />);
        const btnElem = screen.getByRole("button");
        expect(btnElem).toBeInTheDocument();
    });
    test("Тестируем с пустым значением", () => {
        render(<MyButton children={""} />);
        const btnElem = screen.getByRole("button");
        expect(btnElem).toBeInTheDocument();
    });
});
