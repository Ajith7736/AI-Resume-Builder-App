import clsx from 'clsx';
import React from 'react';
import { StyleProp, Text, TextInput, TextInputProps } from 'react-native';
import { colors } from './colors';



export default function RHFInput({ placeholder, onChange, value, className, style, shadow = false, ...props }: TextInputProps & { placeholder?: string, onChange?: () => void, value?: string, className?: string, style?: StyleProp<TextInput>, shadow?: boolean }) {

    return (
        <>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={"#a8a29e"}
                style={{
                    borderWidth: 1,
                    borderColor: colors.tailwind.stone[200],
                    boxShadow: shadow ? "0px 3px 10px rgba(0,0,0,0.06)" : ''
                }}
                {...props}
                className={clsx('px-3 py-3 placeholder:font-medium tracking-widest rounded-md bg-stone-50', className)}
            />
        </>
    )
}




