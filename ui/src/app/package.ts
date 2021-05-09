import { Program } from "./program";

export interface Package {
    name: string,
    desc: string,
    prog: Program[]
}
