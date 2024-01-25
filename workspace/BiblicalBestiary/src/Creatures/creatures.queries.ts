export const creatureQueries = {
	readCreatures:
		`SELECT id as id, name as name, description as description, health as health, attack as attack, defense as defense, unique as unique from bestiary.creatures`,
	readCreaturesById:
		`SELECT id as id, name as name, description as description, health as health, attack as attack, defense as defense, unique as unique from bestiary.creatures
	   WHERE bestiary.creatures.id = ?`,
	postCreature:
		`INSERT INTO CREATURES(name, description, health, attack, defense, unique) VALUES(?,?,?,?,?, ?)`,
	putCreature:
		`UPDATE bestiary.creatures SET name=?, description=?, health=?, attack=?, defense=?, unique=? WHERE id = ?`,
	deleteCreature:
		`DELETE FROM bestiary.creatures where id = ?`
}
