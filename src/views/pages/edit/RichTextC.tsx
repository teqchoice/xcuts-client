import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import SubScript from '@tiptap/extension-subscript'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

import '@mantine/tiptap/styles.css'
import { useEffect } from 'react'

export default function RichTextC({ value, func }: any) {
  const editor = useEditor(
    {
      extensions: [
        StarterKit,
        Underline,
        Color,
        TextStyle,
        Link,
        Superscript,
        SubScript,
        Highlight,
        TextAlign.configure({ types: ['heading', 'paragraph'] })
      ],
      content: value
    },
    []
  )

  useEffect(() => {
    func(editor?.getHTML())
  }, [editor?.getHTML()])

  return (
    <RichTextEditor className='max-w-[80vw] max-h-[70vh] overflow-x-auto' editor={editor}>
      <RichTextEditor.Toolbar sticky>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>
        <>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            {/* <RichTextEditor.Blockquote /> */}
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            {/* <RichTextEditor.Subscript />
              <RichTextEditor.Superscript /> */}
          </RichTextEditor.ControlsGroup>
        </>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.UnsetColor />
          <RichTextEditor.Color color='#000000' />
          <RichTextEditor.Color color='#F03E3E' />
          <RichTextEditor.Color color='#7048E8' />
          <RichTextEditor.Color color='#1098AD' />
          <RichTextEditor.Color color='#37B24D' />
          <RichTextEditor.Color color='#F59F00' />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  )
}
