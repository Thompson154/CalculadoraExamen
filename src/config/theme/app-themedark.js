import { Button, StyleSheet, View } from "react-native";

// Definición de colores para la aplicación
export const colors = {

    // Modo oscuro
    backgroundDark: '#000000',
    backgroundbottondark: '#0D1519',
    backgroundtecladodark: '#010707',
    backgroundbottonBlueDark: '#113154',
    backgroundbottonResult: '#4091F7',
    blackText: '#FFFFFF',
};

// Estilos definidos usando StyleSheet.create para optimización de rendimiento
export const styles = StyleSheet.create({

    // Estilo para el fondo principal de la aplicación
    background:{
        flex: 1,
        backgroundColor: colors.backgroundlight, // Color de fondo claro
    },

    // Estilo para el contenedor del resultado principal
    containerResult: {
        flex: 1.2,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom:30,
    },

    // Estilo para el texto del resultado principal
    mainResult: {
        color: colors.blackText, // Color de texto negro
        fontSize: 60,
        textAlign: "right",
    },

    // Estilo para el texto secundario del resultado
    subResult: {
        color: colors.textblue, // Color de texto azul
        fontSize: 35,
        textAlign: "right",
    },

    // Estilo para el contenedor de los botones
    buttonsContainer: {
        flex: 2,
        paddingTop:10,
        backgroundColor: colors.backgroundteclado, // Color de fondo del teclado
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },

    // Estilo base para los botones
    botton: {
        height:93,
        width: 93,
        backgroundColor: colors.yellow, // Debe ser colors.backgroundbottonlight
        borderRadius:10,
        justifyContent: "center",
        marginHorizontal: 5,
    },

    // Estilo para el botón de resultado especial
    bottonResult: {
        height:93,
        width: 195,
        backgroundColor: colors.yellow, // Debe ser colors.backgroundbottonResult
        borderRadius:10,
        justifyContent: "center",
        marginHorizontal: 5,
    },

    // Estilo para el texto de los botones
    buttonText:{
        color: colors.blackText, // Color de texto negro
        fontSize: 27,
        fontWeight: "400",
        textAlign: "center",
    },

    // Estilo para las filas de botones
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5,
    },

    // Estilo para el texto azul específico
    textBlue:{
        color: colors.textblue, // Color de texto azul
        fontSize: 30,
        fontWeight: "400",
        textAlign: "center",
    },

});