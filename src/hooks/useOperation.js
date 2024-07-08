import { useState } from "react";
import { operators } from "../utils/operatorsUtil";
import { c_evaluate } from "../plugins/pluginMath";

/**
 * Formatea el resultado agregando comas como separadores de miles.
 * 
 * @param {string | number} value - El valor a formatear.
 * @returns {string} - El valor formateado con comas.
 */
const formatResult = (value) => {
    if (typeof value !== 'string') {
        value = value.toString();
    }
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Hook personalizado que gestiona la lógica de operaciones de la calculadora.
 * 
 * @returns {object} - Funciones y estados relacionados con la operación de la calculadora.
 */
export const useOperation = () => {
    const [result, setResult] = useState('0'); // Estado para el resultado de la operación.
    const [operacion, setOperacion] = useState(''); // Estado para la cadena de operación actual.

    /**
     * Reinicia la calculadora estableciendo los estados a sus valores iniciales.
     */
    const reset = () => {
        setResult('0');
        setOperacion('');
    };

    /**
     * Construye la operación actual agregando el texto proporcionado y realizando validaciones.
     * 
     * @param {string} text - El texto a agregar a la operación actual.
     */
    const buildOperation = (text) => {
        if (typeof operacion === 'undefined') {
            setOperacion(text.toString());
            return;
        }

        // Validaciones
        if (text === '0' && operacion === '0') return;

        const lastSegment = operacion.split(/[-+x/]/).pop();

        if (text === '.' && lastSegment.includes('.')) return;

        if (text === '.' && (operacion === '' || operators.includes(operacion.slice(-1)))) {
            setOperacion(operacion + '0.');
            return;
        }

        if (operators.includes(text) && (operacion === '' || operators.includes(operacion.slice(-1)))) return;

        if (text === '+/-') {
            if (operacion === '' || operators.includes(operacion.slice(-1))) return;
            if (operacion[0] === '-') {
                setOperacion(operacion.slice(1));
            } else {
                setOperacion('-' + operacion);
            }
            return;
        }

        // Operación de porcentaje
        if (text === '%') {
            try {
                let currentResult = c_evaluate(operacion.replace('x', '*'));
                let percentageResult = c_evaluate(currentResult + '/100');
                setResult(formatResult(percentageResult.toString()));
                // Comentado para que la operación se vea en la pantalla antes de evaluarla
                // setOperacion(formatResult(percentageResult.toString()));
            } catch (error) {
                setResult('Error');
                setOperacion('');
            }
            return;
        }

        setOperacion(operacion + text.toString());
    };

    /**
     * Evalúa la operación actual y actualiza el resultado.
     */
    const evaluateOperacion = () => {
        if (operacion === '' || operators.includes(operacion.slice(-1))) return;

        if (operacion.includes('/0')) {
            setResult('Error: dividiste por cero');
            setOperacion('');
            return;
        }

        try {
            // Validar si la operación tiene múltiples operadores consecutivos
            if (/[+x/-]{2,}/.test(operacion)) {
                setResult('Error: múltiples operadores');
                setOperacion('');
                return;
            }

            // Reemplazar 'x' por '*' y '%' por '/100' antes de evaluar
            let expression = operacion.replace(/x/g, '*').replace(/%/g, '/100');
            let result = c_evaluate(expression);
            setResult(formatResult(result.toString()));
            // Comentado para mantener la operación en la pantalla después de evaluarla
            // setOperacion(result.toString());
        } catch (error) {
            setResult('Error');
            setOperacion('');
        }
    };

    return {
        reset,
        result,
        operacion,
        setResult,
        setOperacion,
        buildOperation,
        evaluateOperacion,
    };
}



