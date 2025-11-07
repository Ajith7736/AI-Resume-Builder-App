import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const resume = () => {
    return (
        <SafeAreaView className='flex-1 bg-light-white dark:bg-dark-black'>
            <Text className='m-5 text-lg text-light-black dark:text-dark-white'>Select Your Resume Template</Text>
        </SafeAreaView>
    )
}

export default resume

