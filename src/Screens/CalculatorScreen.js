import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View,Switch } from 'react-native';
import { useState } from 'react';



import { CButton } from '../Components/CButton';
import { CButtonResult } from '../Components/CButtonResult';
import { colors, styles} from '../config/theme/app-theme';
import { useOperation } from '../hooks/useOperation';

import { ThemeContext } from '../context/ThemeContext';



export default function CalculatorScreen() {
  
  const { 
    reset, 
    result, 
    operacion, 
    setResult, 
    setOperacion, 
    buildOperation, 
    evaluateOperacion,
  } = useOperation();

  const [theme,setTheme] = useState('light');


  return (
      <View style={styles.background}>
          
          <View style={styles.containerResult}>
              <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>{operacion}</Text>
              <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>{result}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.row}>
              <CButton textButton='AC'  bgColor={colors.backgroundbottonlight} textColor={colors.textblue} action={reset}/>
              <CButton textButton='+/-' bgColor={colors.backgroundbottonlight} textColor={colors.textblue} action={()=>buildOperation('+/-')}/>
              <CButton textButton='%' bgColor={colors.backgroundbottonlight} textColor={colors.textblue} action={()=>buildOperation('%')}/>
              <CButton textButton='÷' bgColor={colors.backgroundbottonGray} action={()=>buildOperation('/')}/>
            </View>
            <View style={styles.row}>
              <CButton textButton='7' bgColor={colors.backgroundbottonlight} action={()=>buildOperation('7')}/>
              <CButton textButton='8' bgColor={colors.backgroundbottonlight} action={()=>buildOperation('8')}/>
              <CButton textButton='9'  bgColor={colors.backgroundbottonlight} action={()=>buildOperation('9')}/>
              <CButton textButton='x'  bgColor={colors.backgroundbottonGray} action={()=>buildOperation('x')}/>
            </View>
            <View style={styles.row}>
              <CButton textButton='4' bgColor={colors.backgroundbottonlight} action={()=>buildOperation('4')}/>
              <CButton textButton='5' bgColor={colors.backgroundbottonlight} action={()=>buildOperation('5')}/>
              <CButton textButton='6'  bgColor={colors.backgroundbottonlight} action={()=>buildOperation('6')}/>
              <CButton textButton='-'  bgColor={colors.backgroundbottonGray} action={()=>buildOperation('-')}/>
            </View>
            <View style={styles.row}>
              <CButton textButton='1' bgColor={colors.backgroundbottonlight} action={()=>buildOperation('1')}/>
              <CButton textButton='2' bgColor={colors.backgroundbottonlight} action={()=>buildOperation('2')}/>
              <CButton textButton='3'  bgColor={colors.backgroundbottonlight} action={()=>buildOperation('3')}/>
              <CButton textButton='+'  bgColor={colors.backgroundbottonGray} action={()=>buildOperation('+')}/>
            </View>
            <View style={styles.row}>
              <CButton textButton='0' bgColor={colors.backgroundbottonlight} action={()=>buildOperation('0')}/>
              <CButton textButton='.' bgColor={colors.backgroundbottonlight} action={()=>buildOperation('.')}/>
              <CButtonResult textButton='='  bgColor={colors.backgroundbottonResult} textColor={colors.backgroundlight}  action={()=>evaluateOperacion()}/>
            </View>
          </View>
      </View>
  );
}
