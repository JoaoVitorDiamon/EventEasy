import { useFonts } from "expo-font";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";


export default function Gambiarra(){
  const [loaded, arial] = useFonts({
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={{backgroundColor:"white"}}>
      <Image source={require("../../../assets/return.png")}/>
    </View>
  )
} 

export function LogoBanner(){
  return (
       <Image source={require("../../../assets/imagem1.png")}/>
  )
} 
export function Logo(){
  return (
       <Image source={require("../../../assets/Logo.png")}/>
  )
} 
export function Butao(){
  return (
       <Pressable style={style.butao}>
        <Text style={style.Textobutao}>Comecar</Text>
       </Pressable>
  )
} 

const style = StyleSheet.create({
  butao:{
    justifyContent:"center",
    position:"relative",
    top:130,
    left:20,
    width:218,
    paddingVertical:12,
    backgroundColor:"black",
    paddingHorizontal:3,
    borderRadius:50
  },
  Textobutao:{
    fontFamily:"PoppinsBold",
    color:"white",
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold"
  }
})

