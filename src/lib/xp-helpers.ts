/**
 * Calculate XP required for the next level using exponential scaling.
 * @param level - The current level of the user.
 * @param baseXp - The XP required for the first level.
 * @param growthRate - The exponential growth rate (e.g., 1.2 for 20% per level).
 * @returns The XP required to reach the next level.
 */

export const calculateXPForNextLevel = ({ level }: { level: number }) => {
    if (level < 1) throw new Error("Level must be 1 or higher")

    return Math.floor(200 * Math.pow(1.2, level - 1))
}