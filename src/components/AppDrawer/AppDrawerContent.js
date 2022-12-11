import React from "react";
import { View, Text } from "react-native";
import useAppDrawer from "./hooks/useAppDrawer";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse, faUser, faGear, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import Grid from "../Grid/Grid";
import AppDrawerTab from "./AppDrawerTab";

function AppDrawerContent({ navigation }) {
    const { activeItem, setActiveItem, onDrawerItemPress } = useAppDrawer();

    return (
        <>
            <View style={styles.drawerContentTopMargin} />
            <Grid.Container spacing={8} direction={'column'}>
                <Grid.Item>
                    <AppDrawerTab
                        icon={<FontAwesomeIcon size={24} icon={faHouse} style={styles.tabIconStyle} />}
                        title={'Home'}
                        active={activeItem === 'home'}
                        onPress={() => onDrawerItemPress('home')}
                    />
                </Grid.Item>
                <Grid.Item>
                    <AppDrawerTab
                        icon={<FontAwesomeIcon size={24} icon={faUser} style={styles.tabIconStyle} />}
                        title={'My Profile'}
                        active={activeItem === 'profile'}
                        onPress={() => onDrawerItemPress('profile')}
                    />
                </Grid.Item>
                <Grid.Item>
                    <AppDrawerTab
                        icon={<FontAwesomeIcon size={24} icon={faGear} style={styles.tabIconStyle} />}
                        title={'Settings'}
                        active={activeItem === 'settings'}
                        onPress={() => onDrawerItemPress('settings')}
                    />
                </Grid.Item>
                <Grid.Item>
                    <AppDrawerTab
                        icon={<FontAwesomeIcon size={24} icon={faIdBadge} style={styles.tabIconStyle} />}
                        title={'Membership'}
                        active={activeItem === 'membership'}
                        onPress={() => onDrawerItemPress('membership')}
                    />
                </Grid.Item>
            </Grid.Container>
        </>
    )
}

export default AppDrawerContent;