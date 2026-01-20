import React, { useState } from 'react'
import './styles.css'
import { Editor } from '@tiptap/react'
import { FontAwesome } from '@expo/vector-icons'

function LinkComponent({ children, editor }: { children: React.ReactNode, editor: Editor }) {
    const [link, setlink] = useState('')
    const [isopen, setisopen] = useState(false)

    const handleclick = () => {
        if (link) {
            return editor.chain().focus().extendMarkRange('link').setLink({ href: link }).run();
        }
        setisopen(false);
        setlink('');
    }

    return (
        <div className='relative'>
            <div onClick={() => setisopen(!isopen)}>
                {children}
            </div>

            <div
                style={{
                    boxShadow: "0 3px 10px rgb(0,0,0,0.06)"
                }}
                className={`z-40 absolute top-10 -left-32  bg-white border m-2 rounded-[7px] border-stone-200 p-2 w-[15rem]
                transition-all duration-150 ease-out 
                ${isopen
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                        : 'opacity-0 -translate-y-1 scale-95 pointer-events-none'}
  `}
            >
                <div className='flex gap-2  justify-between'>
                    <input type="url" placeholder='Enter url' value={link} onChange={(e) => {
                        setlink(e.target.value)
                    }} className='text-xs focus:outline-stone-200 focus:outline placeholder:italic w-full bg-stone-50 rounded-[4px] px-2 py-1 border border-stone-200' />
                    <button className='bg-indigo-500 text-white font-bold w-10 rounded-[4px]' onClick={handleclick}><FontAwesome name='check' color={'white'} /></button>
                </div>
            </div>
        </div>
    )
}

export default LinkComponent