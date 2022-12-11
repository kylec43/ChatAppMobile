import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

function useAppDrawer() {
    const [activeItem, setActiveItem] = React.useState('');
    const navigation = useNavigation();

    const onDrawerItemPress = (item) => {
        setActiveItem(item);
        navigation.navigate(item);
    };

    return { onDrawerItemPress, activeItem, setActiveItem };
}

export default useAppDrawer;