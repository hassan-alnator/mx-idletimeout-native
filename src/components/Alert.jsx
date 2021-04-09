import { createElement } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
export const Alert = props => {

    return (
        
            <AwesomeAlert
                show={true}
                showProgress={false}
                title="Hello"
                message={props.text}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={true}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="Yes"
                confirmButtonColor={props.buttonColor.value}
                onCancelPressed={() => {
                    props.onPress();
                }}
                onConfirmPressed={() => {
                    props.onPress();
                }}
            />
        
    )

}

const styles = {

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }

}