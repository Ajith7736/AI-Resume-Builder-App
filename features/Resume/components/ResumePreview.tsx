import { colors } from '@/components/ui/colors'
import { useUserData } from '@/context/UserDataContext'
import { Template1 } from '@/lib/Templates/Template1'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import * as Print from "expo-print"
import * as Sharing from "expo-sharing"
import React, { RefObject, useEffect, useState } from 'react'
import { Text } from 'react-native'

const ResumePreview = ({ Sheetref }: { Sheetref: RefObject<BottomSheetModal | null> }) => {
    const [Pdfuri, setPdfuri] = useState("")
    const { userdata } = useUserData()


    useEffect(() => {
        const timeout = setTimeout(() => {
            generatePDF();
        }, 500);

        return () => clearTimeout(timeout);
    }, [Template1]);

    const generatePDF = async () => {
        try {
            const { uri } = await Print.printToFileAsync({
                html: Template1(userdata),
                width: 595,
                height: 842,
                base64: true,
            });

            setPdfuri(uri)


        } catch (err) {
            console.error(err);
        }
    };

    const handleShare = async () => {
        try {
            if (!Pdfuri) {
                return console.error("uri not found");
            }

            const isAvailable = await Sharing.isAvailableAsync();
            if (!isAvailable) {
                console.warn("Sharing is not Available on this device")
                return;
            }

            await Sharing.shareAsync(Pdfuri);

        } catch (err) {
            console.error(err);
        }
    }


    const BackDropComponent = (props: any) => {
        return <BottomSheetBackdrop appearsOnIndex={1} disappearsOnIndex={-1} {...props} />

    }


    return (
        <BottomSheetModal
            ref={Sheetref}
            index={1}
            snapPoints={["90%"]}
            backgroundStyle={{
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#e5e7eb",
                borderRadius: 35,
            }}
            handleIndicatorStyle={{
                backgroundColor: colors.tailwind.stone[400],
                shadowRadius: 10,
                width: "20%"
            }}
            enablePanDownToClose={true}
            backdropComponent={BackDropComponent}
        >
            <BottomSheetScrollView className='p-30 '>
                <Text className='text-center stroke-stone-200 mt-5 text-lg uppercase tracking-widest font-extrabold'>Preview</Text>
            </BottomSheetScrollView>
        </BottomSheetModal>
    )
}



export default ResumePreview