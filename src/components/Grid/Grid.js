import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function Container({ children, spacing, direction, style, justifyContent, alignItems, alignContent, wrap }) {

    const containerStyle = {
        ...styles.container,
        ...style,
        flexDirection: direction,
        justifyContent,
        alignItems,
        alignContent,
        flexWrap: wrap
    };

    return (
        <View style={containerStyle}>
            {React.Children.map(children, (child, index) => {
                const shouldAddSpacing = spacing !== 0 && (direction === 'row' || direction === 'column') && index !== children.length - 1;
                return (
                    <>
                        {child}
                        {shouldAddSpacing &&
                            <View 
                                style={{
                                    width: direction === 'row' ? spacing : 0,
                                    height: direction === 'column' ? spacing : 0
                                }}
                            />
                        }
                    </>
                );
            })}
        </View>
    )
}

Container.defaultProps = {
    spacing: 0,
    direction: 'column',
    style: null,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'flex-start',
    wrap: 'nowrap'
};


function Item(props) {
    
    const { flex, alignSelf, alignItems, justifyItems } = props;

    const itemStyle = {
        ...props.style,
        flex, 
        alignSelf,
        alignItems,
        justifyItems
    };

    return (
        <View style={itemStyle}>
            {props.children}
        </View>
    );
}

Item.defaultProps = {
    flex: 0,
    alignSelf: 'stretch'
};


export default {
    Item,
    Container
};