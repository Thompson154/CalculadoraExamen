import { Pressable, Text } from "react-native";
import { styles } from "../config/theme/app-theme";

export const CButton = props => {  
    const { textButton,textColor, bgColor, action,} = props;
    const hadlePress = () => {
      console.log('Press');
    }
  
    return (
      <Pressable 
        onPress={action}
        style={ ({pressed}) => ({
        ...styles.botton,
        backgroundColor: bgColor,
        opacity: pressed ? 0.5 : 1
      }) 
      }>
        <Text style={{ ...styles.buttonText, color: textColor }}>{textButton}</Text>
      </Pressable>
    )
  }