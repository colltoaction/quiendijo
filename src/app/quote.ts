export interface Person {
    readonly name: string;
    readonly quotes: string[];
}

export interface Quote {
    readonly saidBy: Who;
    readonly left: Person; 
    readonly right: Person; 
    readonly quote: string;
}

export enum Who {
    left = "left",
    right = "right",
}
