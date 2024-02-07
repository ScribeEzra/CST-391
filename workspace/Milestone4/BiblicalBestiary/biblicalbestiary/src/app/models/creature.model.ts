export class Creature {
    creatureId: number = 0;
    name: string = "";
    description: string;
    hp: number;
    atk: number;
    def: number;
    unique: boolean;
    
    constructor(id: number, name: string, description: string, hp: number, atk: number, def: number, unique: boolean) {
		this.creatureId = id;
		this.name = name;
		this.description = description;
		this.hp = hp;
		this.atk = atk;
		this.def = def;
        this.unique = unique;
	}

	get Id(): number {
		return this.Id;
	}
	set Id(id: number) {
		this.Id = id;
	}

	get Name(): string {
		return this.name;
	}
	set Name(name: string) {
		this.name = name;
	}

	get Description(): string {
		return this.description;
	}
	set Description(description: string) {
		this.description = description;
	}

	get Atk(): number {
		return this.atk;
	}
	set Atk(atk: number) {
		this.atk = atk;
	}
	get Def(): number {
		return this.def;
	}
	set Def(def: number) {
		this.def = def;
	}
    set Unique(unique: boolean) {
        this.unique = unique;
    }
}
