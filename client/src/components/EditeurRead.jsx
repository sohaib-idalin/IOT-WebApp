import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

export default function EditeurRead({editorRef,initialiser}) {
    
    
    const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
return (
        <Editor
        
            tinymceScriptSrc={'/tinymce/tinymce.min.js'}
            onInit={(evt, editor) => {console.log('init');editorRef.current = editor;initialiser();console.log('fin init');}}
            initialValue='hello'
            init={{
            promotion:false,
            height: 600,
            menubar: false,
            toolbar: false,
            skin: useDarkMode ? 'oxide-dark' : 'oxide',
            content_css: useDarkMode ? 'dark' : 'default',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
            }}
      />
  )
}
