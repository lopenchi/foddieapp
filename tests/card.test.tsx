import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import {Card} from "../src/components/ingredient/Card";

describe("Accordion test", () => {
    test("should show ingredient name", () => {
        render(<Card ingredient={{name: "tomato", group: "vegetable", minAge: 6}} />);
        expect(screen.getByText(/tomato/i)).toBeDefined();
    })

    test("should show border green for vegetables", () => {
        render(<Card ingredient={{name: "tomato", group: "vegetable", minAge: 6}} />);
        expect(screen.getByRole("card").className).toContain("border-green-500");
    });

    test("should show border yellow for fruits", () => {
        render(<Card ingredient={{name: "banana", group: "fruit", minAge: 6}} />);
        expect(screen.getByRole("card").className).toContain("border-yellow-500");
    });

    test("should show border green for protein", () => {
        render(<Card ingredient={{name: "chicken", group: "protein", minAge: 6}} />);
        expect(screen.getByRole("card").className).toContain("border-red-500");
    });
})
