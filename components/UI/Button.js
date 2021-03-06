import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

function Button({children, onPress, mode, style}) {
     return (
        <View style={style}>
           <Pressable onPress={onPress} style={({pressed}) => pressed && styles.Pressed}>
              <View style={[styles.button, mode === "flat" && styles.flat]}>
                  <Text style={[styles.buttonText, mode === "flat" && styles.flat]}>
                     {children}
                  </Text>
              </View>
           </Pressable>
        </View>
     )
}

export default Button;


const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    flat: {
        backgroundColor: "transparent",
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    Pressed: {
        opacity: 0.75, 
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    }
})