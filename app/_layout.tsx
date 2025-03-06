import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={
       {headerTitle: "Welcome Guys",
        headerStyle: {backgroundColor: "white"},
        headerTitleStyle: {color: "black", fontSize: 20},
        headerTintColor: "black"
          
       } 
      }  />
      <Stack.Screen name="about" options={{headerTitle: "Know about the app Guys",
        headerStyle: {backgroundColor: "white"},
        headerTitleStyle: {color: "black", fontSize: 20},
        headerTintColor: "black"  
       } 
      }   />
    </Stack>
  );
}
