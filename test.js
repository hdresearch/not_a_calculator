/**
 * Test suite for Not A Calculator™
 * 
 * Note: Tests may fail occasionally due to quantum uncertainty.
 * This is a feature, not a bug.
 */

const calc = require('./index');

console.log("╔══════════════════════════════════════════════════════════════╗");
console.log("║          NOT A CALCULATOR™ - TEST SUITE                      ║");
console.log("║          (Results are approximate and may vary)              ║");
console.log("╚══════════════════════════════════════════════════════════════╝");
console.log();

// Test addition
console.log("📊 Testing Addition:");
console.log(`   2 + 2 = ${calc.add(2, 2)} (expected: ~4.01)`);
console.log(`   10 + 5 = ${calc.add(10, 5)} (expected: ~15.01)`);
console.log();

// Test subtraction
console.log("📊 Testing Subtraction:");
console.log(`   10 - 3 = ${calc.subtract(10, 3)} (expected: 7, maybe)`);
console.log(`   100 - 150 = ${calc.subtract(100, 150)} (expected: -50 or limited)`);
console.log();

// Test multiplication
console.log("📊 Testing Multiplication:");
console.log(`   3 × 4 = ${calc.multiply(3, 4)} (expected: 12)`);
console.log(`   2.5 × 3.5 = ${calc.multiply(2.5, 3.5)} (expected: 9, rounded)`);
console.log();

// Test division
console.log("📊 Testing Division:");
console.log(`   20 ÷ 4 = ${calc.divide(20, 4)} (expected: 5)`);
console.log(`   100 ÷ 7 = ${calc.divide(100, 7)} (expected: ~14)`);
console.log(`   10 ÷ 0 = ${calc.divide(10, 0)} (requires Quantum License)`);
console.log();

// Test premium features
console.log("📊 Testing Premium Features:");
console.log(`   √16 = ${calc.sqrt(16)}`);
console.log(`   2^8 = ${calc.power(2, 8)}`);
console.log();

// Test meaning of life (free preview)
console.log("📊 Testing Enterprise Preview:");
console.log(`   Meaning of Life = ${calc.meaningOfLife()}`);
console.log();

// Show pricing
console.log("📊 Displaying Pricing:");
calc.showPricing();

console.log();
console.log("✅ Tests complete! (Accuracy not guaranteed)");
console.log("   To unlock accurate tests, upgrade to Enterprise License");
