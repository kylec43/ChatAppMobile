import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppDrawerContent from "./AppDrawerContent";
import HomePage from "../../modules/Home/pages/HomePage/HomePage";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function AppDrawer() {

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={() => <AppDrawerContent />}>
                <Drawer.Screen name={'home'} component={HomePage} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppDrawer;