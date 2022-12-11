import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import AppDrawer from './src/components/AppDrawer/AppDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
        <AppDrawer />
    </PaperProvider>
  );
};