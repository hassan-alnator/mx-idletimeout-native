

export const setBaseTrackerToStarted = async (timerId) => {
    const AsyncStorage = require("@react-native-community/async-storage").default;
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
    const AsyncStorage = require("@react-native-community/async-storage").default;
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
