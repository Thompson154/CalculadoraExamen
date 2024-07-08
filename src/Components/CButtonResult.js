import { Pressable, Text } from "react-native";
import { styles } from "../config/theme/app-theme";

/**
 * Componente CButtonResult
 * 
 * Este componente representa un botón personalizado para resultados en una calculadora.
 * 
 * Props:
 * - textButton: Texto que se muestra en el botón.
 * - textColor: Color del texto del botón.
 * - bgColor: Color de fondo del botón.
 * - action: Función que se ejecuta al presionar el botón.
 */
export const CButtonResult = (props) => {  
    const { textButton, textColor, bgColor, action } = props;

    /**
     * Manejador de presión del botón.
     * 
     * Imprime 'Press' en la consola al presionar el botón.
     */
    const handlePress = () => {
        console.log('Press');
    }

    return (
        <Pressable 
            onPress={action}
            style={({ pressed }) => ({
                ...styles.bottonResult,
                backgroundColor: bgColor,
                opacity: pressed ? 0.5 : 1
            })}
        >
            <Text style={{ ...styles.buttonText, color: textColor }}>{textButton}</Text>
        </Pressable>
    )
}
