import { View, Text } from 'react-native'
import React from 'react'
import RichEditor from './RichEditor'

const RHFRichEditor = ({ onChange, value }: { onChange: (...event: any[]) => void, value?: string }) => {
    return (
        <RichEditor dom={{ scrollEnabled: false, cacheEnabled: true, matchContents: true }} onChange={onChange} value={value}/>
    )
}

export default RHFRichEditor