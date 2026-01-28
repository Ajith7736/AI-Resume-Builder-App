import { supabase } from '@/lib/supabase';
import { toast } from '@/lib/Toast/ToastUtility';
import {
    GoogleSignin,
    isErrorWithCode,
    isSuccessResponse,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { Image } from 'expo-image';
import { Pressable, Text } from 'react-native';


GoogleSignin.configure({
    webClientId: '872173205794-e37a9rd58uq5e79rg454ad17s2ou9h6l.apps.googleusercontent.com',
});

const GoogleSignInButton = () => {

    const SignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const res = await GoogleSignin.signIn();
            if (isSuccessResponse(res)) {
                const { data, error } = await supabase.auth.signInWithIdToken({
                    provider: 'google',
                    token: res.data.idToken as string
                })

                if (data.user) {
                    const { error: dberror } = await supabase.from('User').upsert({
                        id: data.user.id,
                        email: data.user.email as string,
                        fullname: data.user.user_metadata.full_name,
                        image: data.user.user_metadata.avatar_url
                    })

                    if (dberror) {
                        console.error(dberror);
                        toast.error("Something went wrong!")
                    }
                }
            } else {
                toast.error("SignIn cancelled")
            }
        } catch (err) {
            console.error(err);
            if (isErrorWithCode(err)) {
                switch (err.code) {
                    case statusCodes.IN_PROGRESS:
                        toast.success('SignIn in progress')
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        toast.error('Play service not available')
                        break;
                    default:
                        toast.error('Google SignIn Error occured')
                }
            } else {
                toast.error('Something went wrong!')
            }
        }
    }

    return (
        <Pressable className="bg-indigo-500 py-5 px-8 rounded-md flex flex-row items-center gap-4">
            <Text className="text-white tracking-widest font-semibold" onPress={SignIn}>Sign in with Google</Text>
            <Image
                source={require('@/assets/images/google.png')}
                style={{
                    height: 20,
                    width: 20
                }}
            />
        </Pressable>
    )
}

export default GoogleSignInButton