import { AsyncStorage } from "react-native";

export const setBaseTrackerToStarted = async (timerId) => {
    try {
        await AsyncStorage.setItem(
            '@idleTimeOut:base',
            timerId
        );
    } catch (error) {
        // Error saving data
    }
};


export const didBaseTrackerStartBefore = async () => {
    try {
        const value = await AsyncStorage.getItem('@idleTimeOut:base');
        if (value !== null) {
           
            return value;
        }
        return false
    } catch (error) {
        // Error retrieving data
    }
};