'use dom'

import './styles.css';
import { useEditor, EditorContent, Editor, useEditorState } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { colors } from '../ui/colors';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import LinkComponent from './LinkComponent';
import TextAlign from '@tiptap/extension-text-align'
import { Placeholder } from '@tiptap/extensions'


const RichEditor = ({
  dom, onChange, value
}: {
  dom: import('expo/dom').DOMProps,
  onChange: (...event: any[]) => void, value?: string
}) => {
  const editor = useEditor({
    extensions: [StarterKit.configure({
      bulletList: {
        HTMLAttributes: {
          class: 'my-custom-class'
        }
      },
      orderedList: {
        HTMLAttributes: {
          class: 'my-custom-orderedlist'
        }
      },
      link: {
        HTMLAttributes: {
          class: "my-custom-link"
        }
      }
    }), TextAlign.configure({
      types: ['heading', 'paragraph'],
    }), Placeholder.configure({
      placeholder: 'Write something …',
    })],
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  })

  return (
    <div style={{
      borderRadius: 15,
      minHeight: 90
    }} className=' bg-white border w-full border-stone-200'>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      />

      <div className=' p-2'>
        {editor && <ToolBar editor={editor} />}
      </div>


      <div className=' mx-3 mb-3 border border-stone-200 rounded-[10px]'>
        <EditorContent editor={editor} style={{
          flex: 1,
          minHeight: 80,
          padding: 5,
          fontSize: 13,
          outline: 'none',
        }}
        />
      </div>

    </div>

  )
}

export default RichEditor

const ToolBar = ({ editor }: { editor: Editor }) => {

  const editorState = useEditorState({
    editor, selector: ctx => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        isItalic: ctx.editor.isActive('italic') ?? false,
        isUnderline: ctx.editor.isActive('underline') ?? false,
        isBulletList: ctx.editor.isActive('bulletList') ?? false,
        isOrderedList: ctx.editor.isActive('orderedList') ?? false,
        isLink: ctx.editor.isActive('link') ?? false,
        isLeftAligned: ctx.editor.isActive({ textAlign: 'left' }) ?? false,
        isRightAligned: ctx.editor.isActive({ textAlign: 'right' }) ?? false,
        isCenterAligned: ctx.editor.isActive({ textAlign: 'center' }) ?? false
      }
    }
  })

  return <div className='flex gap-1'>

    <button
      aria-label="Toggle bold"
      style={{
        backgroundColor: editorState.isBold ? colors.tailwind.stone[100] : 'white'
      }}
      onClick={() => { editor.chain().focus().toggleBold().run() }}
      className='h-8 items-center  w-[35px] rounded-[6px] flex justify-center'>
      <FontAwesome name='bold' color={editorState.isBold ? colors.tailwind.stone[900] : colors.tailwind.stone[400]} size={16} />
    </button>

    <button
      aria-label="Toggle italic"
      style={{
        backgroundColor: editorState.isItalic ? colors.tailwind.stone[100] : 'white'
      }}
      onClick={() => { editor.chain().focus().toggleItalic().run() }}
      className='h-8 items-center  w-[35px] rounded-[6px] flex justify-center'>
      <FontAwesome name='italic' size={16} color={editorState.isItalic ? colors.tailwind.stone[900] : colors.tailwind.stone[400]} />
    </button>

    <button
      aria-label="Toggle underline"
      style={{
        backgroundColor: editorState.isUnderline ? colors.tailwind.stone[100] : 'white'
      }}
      onClick={() => { editor.chain().focus().toggleUnderline().run() }}
      className='h-8 items-center  w-[35px] rounded-[6px] flex justify-center'>
      <FontAwesome name='underline' size={16} color={editorState.isUnderline ? colors.tailwind.stone[900] : colors.tailwind.stone[400]} />
    </button>

    <div className='h-5 w-px bg-stone-300 mt-2'></div>

    <button
      aria-label="Toggle bullet list"
      style={{
        backgroundColor: editorState.isBulletList ? colors.tailwind.stone[100] : 'white'
      }}
      onClick={() => { editor.chain().focus().toggleBulletList().run() }}
      className='h-8 items-center  w-[35px] rounded-[6px] flex justify-center'>
      <AntDesign name='unordered-list' size={16} color={editorState.isBulletList ? colors.tailwind.stone[900] : colors.tailwind.stone[400]} />
    </button>

    <button
      aria-label="Toggle ordered list"
      style={{
        backgroundColor: editorState.isOrderedList ? colors.tailwind.stone[100] : 'white'
      }}
      onClick={() => { editor.chain().focus().toggleOrderedList().run() }}
      className='h-8 items-center  w-[35px] rounded-[6px] flex justify-center'>
      <AntDesign name='ordered-list' size={16} color={editorState.isOrderedList ? colors.tailwind.stone[900] : colors.tailwind.stone[400]} />
    </button>

    <div className='h-5 w-px bg-stone-300 mt-2'></div>

    {editorState.isLink ?
      <button
        aria-label="Toggle link"
        style={{
          backgroundColor: editorState.isLink ? colors.tailwind.stone[100] : 'white'
        }}
        onClick={() => { editor.chain().focus().extendMarkRange('link').unsetLink().run() }}
        className='h-8 items-center  w-[35px] rounded-[6px] flex justify-center'>
        <FontAwesome name='unlink' size={16} color={editorState.isLink ? colors.tailwind.stone[900] : colors.tailwind.stone[400]} />
      </button> :
      <LinkComponent editor={editor}>
        <button
          aria-label="Toggle link"
          className='h-8 items-center  w-[35px] rounded-[6px] flex justify-center'>
          <AntDesign name='link' size={16} color={colors.tailwind.stone[400]} />
        </button>
      </LinkComponent>
    }

    <div className='h-5 w-px bg-stone-300 mt-2'></div>

    <button
      aria-label="Toggle align left"
      style={{
        backgroundColor: editorState.isLeftAligned ? colors.tailwind.stone[100] : 'white'
      }}
      onClick={() => { editor.chain().focus().setTextAlign('left').run() }}
      className={` h-8 items-center  w-[35px] rounded-[6px] flex justify-center `}>
      <AntDesign name='align-left' size={16} color={editorState.isLeftAligned ? colors.tailwind.stone[900] : colors.tailwind.stone[400]} />
    </button>

    <button
      aria-label="Toggle align center"
      style={{
        backgroundColor: editorState.isCenterAligned ? colors.tailwind.stone[100] : 'white'
      }}
      onClick={() => { editor.chain().focus().setTextAlign('center').run() }}
      className={` h-8 items-center  w-[35px] rounded-[6px] flex justify-center `}>
      <AntDesign name='align-center' size={16} color={editorState.isCenterAligned ? colors.tailwind.stone[900] : colors.tailwind.stone[400]} />
    </button>

    <button
      aria-label="Toggle align right"
      style={{
        backgroundColor: editorState.isRightAligned ? colors.tailwind.stone[100] : 'white'
      }}
      onClick={() => { editor.chain().focus().setTextAlign('right').run() }}
      className={` h-8 items-center  w-[35px] rounded-[6px] flex justify-center `}>
      <AntDesign name='align-right' size={16} color={editorState.isRightAligned ? colors.tailwind.stone[900] : colors.tailwind.stone[400]} />
    </button>

  </div>
}
