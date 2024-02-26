export const creatureQueries = {
    readCreatures:
        `SELECT id as creatureId, name as creatureName, description as description, hp as hp, atk as atk, def as def, \`unique\` as \`unique\` FROM bestiary.creatures`,
    readCreaturesByDescriptionSearch:
        `SELECT id as creatureId, name as creatureName, description as description, hp as hp, atk as atk, def as def, \`unique\` as \`unique\` FROM bestiary.creatures
        WHERE description LIKE ?`,
    readCreaturesByCreatureId:
        `SELECT id as creatureId, name as creatureName, description as description, hp as hp, atk as atk, def as def, \`unique\` as \`unique\` FROM bestiary.creatures
        WHERE id = ?`,
    createCreature:
        `INSERT INTO bestiary.creatures(name, description, hp, atk, def, \`unique\`) VALUES (?, ?, ?, ?, ?, ?)`,
    updateCreature:
        `UPDATE bestiary.creatures SET name=?, description=?, hp=?, atk=?, def=?, \`unique\`=? WHERE id = ?`,
    deleteCreature:
        `DELETE FROM bestiary.creatures WHERE id = ?`,
};
