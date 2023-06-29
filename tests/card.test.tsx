import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import {Card} from "../src/ingredient/Card";

describe("Accordion test", () => {
    const ingredient = {
        name: "tomato",
        group: "vegetable",
        minAge: 6
    }

    test("should show ingredient name", () => {
        render(<Card ingredient={ingredient} />);
        expect(screen.getByText(/tomato/i)).toBeDefined();
    })

    test("should show border green for vegetables", () => {
        render(<Card ingredient={ingredient} />);
        expect(screen.getByRole("card").className).toContain("border-green-500");
    });
})