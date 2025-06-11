import { Stack } from "expo-router";
import './global.css';

export default function RootLayout() {
  return <Stack>
            <Stack.Screen
            name="(tabs)"
            options={{
              headerShown:false,
            }}/>
            <Stack.Screen
            name="movie/[id]"
            options={{
              headerShown:false,
              }}/>
        </Stack>
}
