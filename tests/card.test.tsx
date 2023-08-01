import { beforeEach, describe, expect, test, vi} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import Card from "../src/components/ingredient/Card";
import {act} from "react-dom/test-utils";

describe("Accordion test", () => {
    beforeEach(() => {
        vi.mock('react-router-dom', () => ({
            useParams: () => ({ingredientId: "123"})
        }))

        vi.mock('../src/services/IngredientService', () => ({
            getIngredientById: vi.fn()
                .mockResolvedValueOnce(new Promise(done => done({id: '123', name: "tomato", minAge: 6, group: "vegetable"})))
                .mockResolvedValueOnce(new Promise(done => done({id: '123', name: "tomato", minAge: 6, group: "vegetable"})))
                .mockResolvedValueOnce(new Promise(done => done({id: '123', name: "banana", minAge: 6, group: "fruit"})))
                .mockResolvedValueOnce(new Promise(done => done({id: '123', name: "chicken", minAge: 6, group: "protein"})))
        }));
    });

    test("should show ingredient name", async () => {
        await act( async () => {
            render(<Card/>)
        });
        expect(screen.getByText(/tomato/i)).toBeDefined();
    })

    test("should show border green for vegetables", async () => {
        await act( async () => render(<Card/>));
        expect(screen.getByRole("card").className).toContain("border-green-500");
    });

    test("should show border yellow for fruits", async () => {
        await act( async () => render(<Card/>));
        expect(screen.getByRole("card").className).toContain("border-yellow-500");
    });

    test("should show border red for protein", async () => {
        render(<Card/>);
        await waitFor(() => {
            expect(screen.getByRole("card").className).toContain("border-red-500");
            return;
        })
    });
})
