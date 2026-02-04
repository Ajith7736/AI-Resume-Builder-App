import { colors } from '@/components/ui/colors'
import React from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import RHFInput from '@/components/ui/InputText'
import RHFDatePicker from '@/components/ui/RHFDatePicker'
import RHFDropDown from '@/components/ui/RHFDropDown'
import { ApplicationInputs, ApplicationSchema } from '@/lib/Schema/ApplicationForm'
import { ArrowRight, Scroll } from 'lucide-react-native'
import { ScrollView } from 'react-native'
import SubmitButton from '@/components/ui/SubmitButton'

const ApplicationForm = () => {


  const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm<ApplicationInputs>({
    resolver: zodResolver(ApplicationSchema)
  })


  const resumedata = [
    { name: 'Software Engineer Resume', id: '1' },
    { name: 'Frontend Developer Resume', id: '2' },
    { name: 'Fullstack Developer Resume', id: '3' },
  ]

  const Status = [
    { name: 'Applied' },
    { name: 'Pending' },
    { name: 'Interviewing' },
    { name: 'No_Response' },
    { name: 'Rejected' },
    { name: 'Offer' },
  ]

  const handlesubmit: SubmitHandler<ApplicationInputs> = (data) => {
    console.log(data)
  }

  return (
    <View style={{ padding: 30 }} className='h-screen bg-slate-50'>
      <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={40}>
        <ScrollView>
          <View>
            <Text className="text-2xl font-extrabold tracking-widest text-slate-700">New Log</Text>
            <Text className="text-[12px] text-slate-500 font-bold tracking-wider">
              Log your latest application
            </Text>
          </View>

          <View className='mt-10 flex flex-col gap-3'>
            <Text className="text-[12px] text-slate-500 font-bold tracking-wider">
              JOB DETAILS *
            </Text>
            <Controller
              control={control}
              name='companyName'
              render={({ field: { value, onChange }, formState: { errors } }) => {
                return <RHFInput value={value} onChange={onChange} error={errors.companyName?.message ? true : false} placeholder='Company Name' />
              }}
            />
            <Controller
              control={control}
              name='roleTitle'
              render={({ field: { value, onChange }, formState: { errors } }) => {
                return <RHFInput value={value} onChange={onChange} error={errors.roleTitle?.message ? true : false} placeholder='Role Title' />
              }}
            />
            <Text className="text-[12px] mt-5 text-slate-500 font-bold tracking-wider">
              RESUME USED *
            </Text>
            <Controller
              control={control}
              name='resumeUsed'
              render={({ field: { value, onChange }, formState: { errors } }) => {
                return <RHFDropDown placeholder='Select Resume' dropdata={resumedata} onChange={onChange} value={value} setValue={setValue} />
              }}
            />
            <View className='flex flex-row items-center w-full gap-3'>
              <View className='flex gap-2' style={{
                width: '45%'
              }}>
                <Text className="text-[12px] mt-5 text-slate-500 font-bold tracking-wider">
                  DATE *
                </Text>
                <Controller
                  control={control}
                  name='date'
                  render={({ field: { value, onChange }, formState: { errors } }) => {
                    return <RHFDatePicker value={value} onChange={onChange} error={errors.roleTitle?.message ? true : false} />
                  }}
                />
              </View>
              <View className='flex gap-2' style={{
                width: '50%'
              }}>
                <Text className="text-[12px] mt-5 text-slate-500 font-bold tracking-wider">
                  STATUS *
                </Text>
                <Controller
                  control={control}
                  name='status'
                  render={({ field: { value, onChange }, formState: { errors } }) => {
                    return <RHFDropDown placeholder='Select Status' value={value} onChange={onChange} dropdata={Status} />
                  }}
                />
              </View>

            </View>


            <Text className="text-[12px] mt-2 text-slate-500 font-bold tracking-wider">
              JOB DESC (optional)
            </Text>
            <Controller
              control={control}
              name='jobDescription'
              render={({ field: { value, onChange }, formState: { errors } }) => {
                return <RHFInput value={value} onChange={onChange} error={errors.companyName?.message ? true : false} placeholder='Company Name' />
              }}
            />

            <Text className="text-[12px] mt-2 text-slate-500 font-bold tracking-wider">
              LINK
            </Text>
            <Controller
              control={control}
              name='link'
              render={({ field: { value, onChange }, formState: { errors } }) => {
                return <RHFInput value={value} onChange={onChange} error={errors.companyName?.message ? true : false} placeholder='Company Name' />
              }}
            />
          </View>
          <SubmitButton onPress={() => handleSubmit(handlesubmit)} className=' mt-10'>
            <View className='flex flex-row items-center justify-center'>
              <Text className='text-white tracking-widest font-bold text-center '>Save Application </Text>
              <ArrowRight color={'white'} size={18} />
            </View>
          </SubmitButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </View >
  )
}

export default ApplicationForm
