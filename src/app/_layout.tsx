import { Stack } from "expo-router";
import "../style/global.css"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{headerShown:false}}/>
    </Stack>
  );
}
