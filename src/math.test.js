//! node module import
const { calculateTotal,celsiusToFahrenheit,fahrenheitToCelsius,fibonacci}= require("./math.js");




//! es6 module import
// import { calculateTotal,celsiusToFahrenheit,fahrenheitToCelsius,fibonacci } from "./math";

describe("calculateTotal",() =>{
    // test caselerini oluştur.
    it("should exist", ()=>{
        expect(calculateTotal).toBeDefined();
    });
    it("should return a number",()=>{
        expect(calculateTotal(100,0.20)).toBe(120);
    });
    it("should return with default VAT", () => {     expect(calculateTotal(200)).toBe(236);   });
});

describe("celsiusToFahrenheit",() =>{
    it("should exist", ()=>{
        expect(celsiusToFahrenheit).toBeDefined();
    });
    it("should convert 10 to 50",()=>{
        expect(celsiusToFahrenheit(10)).toBe(50);
    });
    it("should convert 20 to 68", () => {
        expect(celsiusToFahrenheit(20)).toBe(68);
    });
});


describe("fahrenheitToCelsius",() =>{
    it("should exist", ()=>{
        expect(fahrenheitToCelsius).toBeDefined();
    });
    it("should exist", ()=>{
        expect(fahrenheitToCelsius(32)).toBe(0);
    });
});

describe("fibonacci",() =>{
    it("should exist", ()=>{
        expect(fibonacci).toBeDefined();
    });
    it("should return a number", ()=>{
        expect(fibonacci(1)).toBe(1);
    });
    it("should return 55 for 10th index", ()=>{
        expect(fibonacci(10)).toBe(55);
    });

    it("should throw error if mumber is less than 1", ()=>{
        expect(()=>fibonacci(0)).toThrow(new Error("Must enter a number greater than 0"))
    });
    it("should use default parameter if none was given.", () => {
        expect(fibonacci()).toBe(1);
    });
});