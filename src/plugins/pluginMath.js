import { evaluate } from "mathjs";


//Para lograr cambiar la libreria solo una vez
export const c_evaluate = (operation) => {
    const result = evaluate(operation);
    return result;
};