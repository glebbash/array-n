import { expect } from "chai"
import { array } from "../src/array"

describe("array", () => {
    it("should create array of 10 elements", () => {
        const arr: number[] = array([10], (i) => i)
        expect(arr).eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
    it("should create 2x2 array", () => {
        const arr: number[][] = array([2, 2], () => 0)
        expect(arr).eql([
            [0, 0],
            [0, 0],
        ])
    })
    it("should create 3x3 array of tik tac toe", () => {
        const arr: number[][] = array([3, 3], (i, j) =>
            (i * 3 + j) % 2 == 0 ? "X" : "O",
        )
        expect(arr).eql([
            ["X", "O", "X"],
            ["O", "X", "O"],
            ["X", "O", "X"],
        ])
    })
})
