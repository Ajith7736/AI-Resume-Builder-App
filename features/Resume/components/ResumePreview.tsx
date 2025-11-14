import { Template1 } from '@/lib/Templates/Template1'
import { Ionicons } from '@expo/vector-icons'
import * as Print from "expo-print"
import React, { useEffect, useState } from 'react'
import { Dimensions, Pressable, Text, View } from 'react-native'
import Pdf from "react-native-pdf"
import { SafeAreaView } from 'react-native-safe-area-context'

const ResumePreview = ({ setshowresume }: { setshowresume: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [Pdfuri, setPdfuri] = useState("")
    const [PdfSource, setPdfSource] = useState<string>("")

    useEffect(() => {
        generatePDF();
    }, []);

    const generatePDF = async () => {
        try {
            const { base64 } = await Print.printToFileAsync({
                html: Template1,
                width: 595,
                height: 842,
                base64: true,
            });

            const htmlContent = `data:application/pdf;base64,${base64}`;

            setPdfSource(htmlContent);

        } catch (err) {
            console.error(err);
        }
    };



    return (
        <SafeAreaView
            style={{
                
            }}
            className='flex-1'
        >
            <View className='absolute inset-0 bg-light-gray/10 flex justify-center items-center p-5'>


                <Pressable
                    onPress={() => setshowresume(false)}
                    className='absolute right-6 top-0 bg-white p-2 rounded-md'
                >
                    <Ionicons name='close' size={24} color="black" />
                </Pressable>
                <Pdf
                    trustAllCerts={false}
                    source={{
                        uri: PdfSource,
                        cache: false
                    }}
                    style={{
                        flex: 1,
                        width: Dimensions.get("window").width,
                        height: 180,
                        margin: 20
                    }}
                    onLoadComplete={(numberofpages, filepath) => {
                        console.log(numberofpages)
                    }}
                />



                <Pressable
                    className='p-4 border border-light-activeborder/20 rounded-md bg-dark-gray mt-6 w-40'
                >
                    <Text className='text-white text-center font-semibold'>Share PDF</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}



export default ResumePreview