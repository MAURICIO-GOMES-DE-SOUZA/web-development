
import {describe, expect, it, test} from 
"vitest";
import { sumNubers, subNubers } from "./mathServices";

describe("test math functions", () => {
    test("shoud make a sum 2 + 3 = 5", () => {
        expect(sumNubers(2, 3)).toEqual(5)
    });
    
    it("shoud make a sub 5 - 2 = 3", () => {
        expect(subNubers(5, 2)).toEqual(3);
});
});



