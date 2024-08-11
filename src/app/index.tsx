import { Text, View, StyleSheet } from "react-native";
import Gambiarra, { Butao, Logo, LogoBanner } from "../components/index/indexComp";
import { useFonts } from "expo-font";

export default function Index() {
  const [loaded, arial] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
  });
  return (
    <View style={{backgroundColor:"white"}}>
    <View style={styleIndex.ImageApp}>
      <LogoBanner/>
      </View>
    <View style={styleIndex.Gambiarra}>
      <Gambiarra />
      </View>
    <View style={styleIndex.Logo}>
      <Logo/>
      </View>
    <View style={styleIndex.PosicaoTexto}>
      <Text style={styleIndex.Texto}>Organize seus eventos de forma fácil e eficiente. Vamos começar!</Text>
      </View>
    <View style={styleIndex.PosicaoTexto}>
      <Butao/>
      </View>
    </View>
  );
}

const styleIndex = StyleSheet.create({
  ImageApp:{
    alignItems:"center",
    justifyContent:"flex-end",
    marginLeft:5,
    zIndex:1
  },
  Gambiarra:{
    position:"relative",
    bottom:300,
    right:8
  },
  Logo:{
    position:"absolute",
    top:400,
    left:123
  },
  Texto:{
    color:"white",
    fontFamily:"Poppins",
    fontSize:22,
    fontWeight:"light"
  },
  PosicaoTexto:{
    position:"absolute",
    top:550,
    left:75,
    width:300
  }
})

