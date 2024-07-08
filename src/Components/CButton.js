import { Pressable, Text } from "react-native";
import { styles } from "../config/theme/app-theme";

/**
 * Componente CButton
 * 
 * Este componente representa un botón personalizado en una calculadora.
 * 
 * Props:
 * - textButton: Texto que se muestra en el botón.
 * - textColor: Color del texto del botón.
 * - bgColor: Color de fondo del botón.
 * - action: Función que se ejecuta al presionar el botón.
 */
export const CButton = (props) => {  
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
                ...styles.botton,
                backgroundColor: bgColor,
                opacity: pressed ? 0.5 : 1
            })}
        >
            <Text style={{ ...styles.buttonText, color: textColor }}>{textButton}</Text>
        </Pressable>
    )
}
