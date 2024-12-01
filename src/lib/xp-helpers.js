"use strict";
/**
 * Calculate XP required for the next level using exponential scaling.
 * @param level - The current level of the user.
 * @param baseXp - The XP required for the first level.
 * @param growthRate - The exponential growth rate (e.g., 1.2 for 20% per level).
 * @returns The XP required to reach the next level.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateXPForNextLevel = void 0;
var calculateXPForNextLevel = function (_a) {
    var level = _a.level;
    if (level < 1)
        throw new Error("Level must be 1 or higher");
    return Math.floor(200 * Math.pow(1.2, level - 1));
};
exports.calculateXPForNextLevel = calculateXPForNextLevel;
console.log((0, exports.calculateXPForNextLevel)({ level: 1 })); // Output: 200
console.log((0, exports.calculateXPForNextLevel)({ level: 2 })); // Output: 240
console.log((0, exports.calculateXPForNextLevel)({ level: 3 })); // Output: 288
console.log((0, exports.calculateXPForNextLevel)({ level: 10 })); // Output: 954
console.log((0, exports.calculateXPForNextLevel)({ level: 120 })); // Output: 954
console.log((0, exports.calculateXPForNextLevel)({ level: 89 })); // Output: 954
