import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
// Importa o arquivo CSS do Tailwind para que o NativeWind possa processá-lo
import './src/styles/tailwind.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-darkBackground">
      <Text className="text-3xl font-bold text-lightText">
        Bem-vindo à pagina principal!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
