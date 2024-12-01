/**
 * Calculate XP required for the next level using exponential scaling.
 * @param level - The current level of the user.
 * @returns The XP required to reach the next level.
 */
export const calculateXPForNextLevel = ({ level }: { level: number }) => {
    if (level < 1) throw new Error("Level must be 1 or higher");

    return Math.floor(200 * Math.pow(1.2, level - 1));
};

/**
 * Calculate the total XP required to reach the start of a specific level.
 * @param level - The level to calculate XP for.
 * @returns The total XP required to reach the start of the given level.
 */
export const calculateTotalXPForLevel = ({ level }: { level: number }) => {
    if (level < 1) throw new Error("Level must be 1 or higher");

    let totalXP = 0;
    for (let i = 1; i < level; i++) {
        totalXP += calculateXPForNextLevel({ level: i });
    }
    return totalXP;
};

/**
 * Calculate player level based on their total XP.
 * @param xp - The current XP of the user.
 * @returns The calculated level of the player.
 */
export const calculatePlayerLevel = ({ xp }: { xp: number }) => {
    if (xp < 1) throw new Error("XP must be 1 or higher");

    let level = 1;
    let totalXP = 0;

    while (xp >= totalXP + calculateXPForNextLevel({ level })) {
        totalXP += calculateXPForNextLevel({ level });
        level++;
    }

    return level;
};

/**
 * Calculate the XP gained within the player's current level.
 * @param xp - The current XP of the user.
 * @returns The XP the user has gained in their current level.
 */
export const calculateXPInCurrentLevel = ({ xp }: { xp: number }) => {
    if (xp < 1) throw new Error("XP must be 1 or higher");

    const currentLevel = calculatePlayerLevel({ xp });
    const totalXPForCurrentLevelStart = calculateTotalXPForLevel({ level: currentLevel });

    return xp - totalXPForCurrentLevelStart;
};

/**
 * Calculate the XP needed to reach the next level.
 * @param xp - The current XP of the user.
 * @returns The XP remaining to reach the next level.
 */
export const calculateXPToNextLevel = ({ xp }: { xp: number }) => {
    if (xp < 1) throw new Error("XP must be 1 or higher");

    const currentLevel = calculatePlayerLevel({ xp });
    const totalXPForNextLevelStart = calculateTotalXPForLevel({ level: currentLevel + 1 });

    return totalXPForNextLevelStart - xp;
};
