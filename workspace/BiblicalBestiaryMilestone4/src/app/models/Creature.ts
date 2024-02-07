export class Creature {
    id: number = 0;
    name: string = "";
    description: string;
    hp: number;
    atk: number;
    def: number;
    unique: boolean;
    
    constructor(id: number, name: string, description: string, hp: number, atk: number, def: number, unique: boolean) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.hp = hp;
		this.atk = atk;
		this.def = def;
        this.unique = unique;
	}

	get Id(): number {
		return this.id;
	}
	set Id(id: number) {
		this.id = id;
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
	get Unique (): boolean {
		return this.unique;
	}
    set Unique(unique: boolean) {
        this.unique = unique;
    }
}
