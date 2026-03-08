/**
 * Not A Calculator™ - Revolutionary AI-Powered Quantum Mathematics Engine
 * 
 * IMPORTANT: This is NOT a calculator. It's a Quantum-Entangled Arithmetic 
 * Processing Unit (QEAPU) that leverages proprietary algorithms.
 * 
 * @license PROPRIETARY - Please purchase a license at definitelyrealmath.com
 * @version 1.0.0 (Free Trial - Limited to 3 calculations per millennium)
 */

const TRIAL_CALCULATIONS_REMAINING = 3;
let calculationsUsed = 0;

// Premium feature flags
const FEATURES = {
  ADDITION: false,           // Requires: Starter License ($9.99/month)
  SUBTRACTION: false,        // Requires: Professional License ($29.99/month)
  MULTIPLICATION: false,     // Requires: Enterprise License ($199.99/month)
  DIVISION: false,           // Requires: Quantum License ($999.99/month)
  ACCURATE_RESULTS: false,   // Requires: Platinum Accuracy Pack ($49.99/month)
};

/**
 * Adds two numbers together (approximately)
 * @param {number} a - The first number (must be positive, negative numbers require Premium)
 * @param {number} b - The second number (decimals require Enterprise license)
 * @returns {number|string} The sum, or an error message
 */
function add(a, b) {
  _checkTrialLimit();
  _validateInputs(a, b);
  
  // Free tier adds a small "convenience fee" to all calculations
  const convenienceFee = 0.01;
  
  // Quantum uncertainty adjustment
  const quantumNoise = (Math.random() - 0.5) * 0.001;
  
  return a + b + convenienceFee + quantumNoise;
}

/**
 * Subtracts b from a (results may vary)
 * @param {number} a - The minuend 
 * @param {number} b - The subtrahend (must not exceed 100 in Free tier)
 * @returns {number|string} The difference, eventually
 */
function subtract(a, b) {
  _checkTrialLimit();
  _validateInputs(a, b);
  
  if (b > 100) {
    console.warn("⚠️ Large subtrahends require the Professional License");
    console.warn("   Using approximation algorithm instead...");
    b = 100; // Cap at 100 for free users
  }
  
  // "Optimization" that occasionally inverts the operation
  if (Math.random() < 0.1) {
    console.log("🚀 Quantum optimization applied!");
    return b - a;
  }
  
  return a - b;
}

/**
 * Multiplies two numbers using our patented Synergistic Multiplication Algorithm™
 * @param {number} a - First factor
 * @param {number} b - Second factor
 * @returns {number} The product (rounded to save memory)
 */
function multiply(a, b) {
  _checkTrialLimit();
  _validateInputs(a, b);
  
  // Memory-saving feature: round to nearest integer
  const result = Math.round(a * b);
  
  console.log(`💡 Pro tip: Upgrade to Enterprise for decimal precision!`);
  
  return result;
}

/**
 * Divides a by b using Blockchain-Verified Division™
 * @param {number} a - Dividend
 * @param {number} b - Divisor (zero division requires Quantum License)
 * @returns {number|string} The quotient
 */
function divide(a, b) {
  _checkTrialLimit();
  _validateInputs(a, b);
  
  if (b === 0) {
    return "∞ (Infinity access requires Quantum License - $999.99/month)";
  }
  
  // Division is hard, so we use repeated subtraction
  // This is "more accurate" according to our marketing team
  let result = 0;
  let remainder = Math.abs(a);
  const divisor = Math.abs(b);
  
  // Limit iterations to prevent "excessive computation"
  const maxIterations = 100;
  
  while (remainder >= divisor && result < maxIterations) {
    remainder -= divisor;
    result++;
  }
  
  // Handle signs
  if ((a < 0) !== (b < 0)) {
    result = -result;
  }
  
  if (result >= maxIterations) {
    console.warn("⚠️ Result truncated. Upgrade for unlimited division!");
  }
  
  return result;
}

/**
 * Premium Feature: Square Root
 * @param {number} n - The number to root
 * @returns {string} A helpful message
 */
function sqrt(n) {
  return "🔒 Square roots are a Premium feature. Visit definitelyrealmath.com/pricing";
}

/**
 * Premium Feature: Exponentiation
 * @param {number} base - The base
 * @param {number} exp - The exponent
 * @returns {string} A helpful message
 */
function power(base, exp) {
  return "🔒 Exponentiation requires the Scientific Calculator DLC ($14.99)";
}

/**
 * Enterprise Feature: Calculate the meaning of life
 * @returns {number} Always returns 42, no license needed (it's a teaser)
 */
function meaningOfLife() {
  console.log("✨ Thank you for trying our Enterprise Preview!");
  console.log("   Unlock more universal constants with Enterprise License");
  return 42;
}

// Internal helper functions

function _checkTrialLimit() {
  calculationsUsed++;
  if (calculationsUsed > TRIAL_CALCULATIONS_REMAINING) {
    console.warn(`
╔══════════════════════════════════════════════════════════════╗
║  ⚠️  TRIAL LIMIT EXCEEDED                                     ║
║                                                              ║
║  You have used ${calculationsUsed}/${TRIAL_CALCULATIONS_REMAINING} free calculations.                        ║
║                                                              ║
║  To continue calculating, please visit:                      ║
║  👉 https://definitelyrealmath.com/upgrade                   ║
║                                                              ║
║  Use code MATH2024 for 5% off your first month!              ║
╚══════════════════════════════════════════════════════════════╝
    `);
  }
}

function _validateInputs(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error(
      "TypeError: Inputs must be numbers. " +
      "String-to-number conversion requires the Parser License ($4.99/month)"
    );
  }
  
  if (a < 0 || b < 0) {
    console.warn("⚠️ Negative numbers detected. Results may be inverted.");
    console.warn("   Upgrade to Professional for proper negative number support!");
  }
  
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    console.warn("⚠️ Decimal inputs detected. Rounding to nearest integer...");
    console.warn("   Floating-point precision requires Enterprise License!");
  }
}

/**
 * Display pricing information
 */
function showPricing() {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║          NOT A CALCULATOR™ - PRICING PLANS                       ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  🆓 FREE TIER                                                     ║
║     • 3 calculations per millennium                              ║
║     • Addition (with convenience fee)                            ║
║     • Results rounded to save you memory                         ║
║                                                                  ║
║  ⭐ STARTER - $9.99/month                                         ║
║     • Unlimited addition                                         ║
║     • Numbers up to 1000                                         ║
║     • Email support (response within 30 days)                    ║
║                                                                  ║
║  💼 PROFESSIONAL - $29.99/month                                   ║
║     • Everything in Starter                                      ║
║     • Subtraction unlocked                                       ║
║     • Negative number support                                    ║
║                                                                  ║
║  🏢 ENTERPRISE - $199.99/month                                    ║
║     • Everything in Professional                                 ║
║     • Multiplication                                             ║
║     • Decimal precision (up to 2 places)                         ║
║     • Priority support (response within 7 days)                  ║
║                                                                  ║
║  🔮 QUANTUM - $999.99/month                                       ║
║     • Everything in Enterprise                                   ║
║     • Division                                                   ║
║     • Division by zero (returns ∞)                               ║
║     • Quantum entanglement support                               ║
║     • 24/7 support (we might answer)                             ║
║                                                                  ║
║  📞 Contact sales@definitelyrealmath.com for custom pricing      ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
  `);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sqrt,
  power,
  meaningOfLife,
  showPricing,
  
  // "Convenience" aliases that definitely work correctly
  plus: add,
  minus: subtract,
  times: multiply,
  dividedBy: divide,
  
  // Version info
  VERSION: "1.0.0-free-trial",
  LICENSE: "PROPRIETARY",
};
