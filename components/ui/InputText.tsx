import clsx from 'clsx';
import React, { useState } from 'react';
import { StyleProp, TextInput, TextInputProps } from 'react-native';
import { colors } from './colors';



export default function RHFInput({ placeholder, onChange, value, className, style, shadow = false, focusstyle = true, error, ...props }: TextInputProps & { placeholder?: string, onChange?: () => void, value?: string, className?: string, style?: StyleProp<TextInput>, shadow?: boolean, focusstyle?: boolean, error?: boolean }) {
    const [focused, setFocused] = useState(false)
    return (

        <>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                cursorColor={colors.tailwind.slate[800]}
                placeholderTextColor={colors.tailwind.slate[300]}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                    borderWidth: 1,
                    borderColor: !error ? focused && focusstyle ? colors.tailwind.slate[400] : colors.tailwind.slate[200] : colors.tailwind.red[500],
                    boxShadow: shadow ? "0px 3px 10px rgba(0,0,0,0.06)" : ''
                }}
                {...props}
                className={clsx('px-3 py-4 placeholder:font-medium tracking-widest rounded-lg bg-slate-100', className)}
            />
        </>
    )
}




