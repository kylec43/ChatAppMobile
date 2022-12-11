import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import Grid from "../Grid/Grid";
import styles from "./styles";

function AppDrawerTab({ icon, title, onPress, titleStyle, active }) {

    const touchableOpacityStyle = {
        ...styles.tabContainer,
        backgroundColor: active ? 'rgba(135, 206, 250, 0.50)' : null
    };

    return (
        <TouchableOpacity onPress={onPress} style={touchableOpacityStyle}>
            <Grid.Container direction={'row'}  justifyContent={'space-around'}>
                <Grid.Item flex={1} alignItems={'center'}>
                    {icon}
                </Grid.Item>
                <Grid.Item flex={2}>
                    <Text style={[styles.tabTitleStyle, titleStyle]}>{title}</Text>
                </Grid.Item>
            </Grid.Container>
        </TouchableOpacity>
    );
}

AppDrawerTab.defaultProps = {
    icon: null,
    title: '',
    onPress: null,
    titleStyle: null,
    active: false
};

export default AppDrawerTab;