import { useColorScheme } from 'nativewind';
import React from 'react';
import { TextInput } from 'react-native';
import { colors } from './colors';

export default function InputText({ placeholder }: { placeholder: string }) {

    const { colorScheme } = useColorScheme();

    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={colorScheme === "dark" ? colors.dark.activeBorder : colors.light.textGray}
            className='px-3 m-5 border border-light-activeborder/20 dark:border-dark-inputborder rounded-md bg-light-inputfield text-black dark:text-white dark:bg-dark-inputfield'></TextInput>
    )
}



