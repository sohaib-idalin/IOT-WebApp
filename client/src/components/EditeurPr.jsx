import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import DataFetcher from '../api/DataFetcher';
import { initialContent } from '../constants/TextEditorInitialContent';

export default function EditeurPr() {
    
    const editorRef = useRef(null);
    const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
return (
    <div key={2}>
        <Editor
            apiKey='ikp81zrkoz98rg43nxj9z7rf5pqqaho9ld0hea7a9jj1qyol'
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue={initialContent}
            init={{
            height: 600,
            plugins: 'preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export footnotes mergetags autocorrect typography advtemplate',
            tinydrive_token_provider: async (success, failure) => {
                const res=await DataFetcher({method:'GET',path:'http://localhost:3001/jwt',absolute:true})
                console.log(res);
                success(res);
             },
            tinydrive_dropbox_app_key: 'YOUR_DROPBOX_APP_KEY',
            tinydrive_google_drive_key: 'YOUR_GOOGLE_DRIVE_KEY',
            tinydrive_google_drive_client_id: 'YOUR_GOOGLE_DRIVE_CLIENT_ID',
            mobile: {
                plugins: 'preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate',
            },
            menu: {
                tc: {
                title: 'Comments',
                items: 'addcomment showcomments deleteallconversations'
                }
            },
            menubar: 'file edit view insert format tools table tc help',
            toolbar: 'undo redo | bold italic underline strikethrough | typography spellcheckdialog | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | inserttemplate addtemplate | outdent indent | numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed link anchor codesample | a11ycheck ltr rtl | showcomments addcomment | footnotes | mergetags',
            toolbar_sticky: true,
            autosave_ask_before_unload: true,
            autosave_interval: '30s',
            autosave_prefix: '{path}{query}-{id}-',
            autosave_restore_when_empty: false,
            autosave_retention: '2m',
            image_advtab: true,
            typography_rules: [
                'common/punctuation/quote',
                'en-US/dash/main',
                'common/nbsp/afterParagraphMark',
                'common/nbsp/afterSectionMark',
                'common/nbsp/afterShortWord',
                'common/nbsp/beforeShortLastNumber',
                'common/nbsp/beforeShortLastWord',
                'common/nbsp/dpi',
                'common/punctuation/apostrophe',
                'common/space/delBeforePunctuation',
                'common/space/afterComma',
                'common/space/afterColon',
                'common/space/afterExclamationMark',
                'common/space/afterQuestionMark',
                'common/space/afterSemicolon',
                'common/space/beforeBracket',
                'common/space/bracket',
                'common/space/delBeforeDot',
                'common/space/squareBracket',
                'common/number/mathSigns',
                'common/number/times',
                'common/number/fraction',
                'common/symbols/arrow',
                'common/symbols/cf',
                'common/symbols/copy',
                'common/punctuation/delDoublePunctuation',
                'common/punctuation/hellip'
            ],
            typography_ignore: [ 'code' ],
            advtemplate_templates: [
                {
                    id: '1',
                    title: 'Resolving tickets',
                    content: '<p>As we have not heard back from you in over a week, we have gone ahead and resolved your ticket.</p>'
                },
                {
                    id: '2',
                    title: 'Quick replies',
                    items: [
                    {
                        id: '3',
                        title: 'Message received',
                        content: '<p>Just a quick note to say we have received your message, and will get back to you within 48 hours.</p>'
                    },
                    {
                        id: '4',
                        title: 'Progress update',
                        content: '</p>Just a quick note to let you know we are still working on your case</p>'
                    }
                    ]
                }
            ],
            link_list: [
                { title: 'My page 1', value: 'https://www.tiny.cloud' },
                { title: 'My page 2', value: 'http://www.moxiecode.com' }
            ],
            image_list: [
                { title: 'My page 1', value: 'https://www.tiny.cloud' },
                { title: 'My page 2', value: 'http://www.moxiecode.com' }
            ],
            image_class_list: [
                { title: 'None', value: '' },
                { title: 'Some class', value: 'class-name' }
            ],
            importcss_append: true,
            image_caption: true,
            quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
            noneditable_class: 'mceNonEditable',
            toolbar_mode: 'sliding',
            spellchecker_ignore_list: ['Ephox', 'Moxiecode', 'tinymce', 'TinyMCE', 'tm', 'TM'], // ‘tm’ and ‘TM’ are temporary spellchecker bug workarounds
            tinycomments_mode: 'embedded',
            content_style: '.mymention{ color: gray; }',
            contextmenu: 'link linkchecker lists image editimage table configurepermanentpen spellchecker',
            a11y_advanced_options: true,
            skin: useDarkMode ? 'oxide-dark' : 'oxide',
            content_css: useDarkMode ? 'dark' : 'default',
            /*
            The following settings require more configuration than shown here.
            For information on configuring the mentions plugin, see:
            https://www.tiny.cloud/docs/tinymce/6/mentions/.
            */
            // mentions_selector: '.mymention',
            // mentions_fetch: mentions_fetch,
            // mentions_menu_hover: mentions_menu_hover,
            // mentions_menu_complete: mentions_menu_complete,
            // mentions_select: mentions_select,
            // mentions_item_type: 'profile',
            autocorrect_capitalize: true,
            mergetags_list: [
                {
                title: 'Client',
                menu: [
                    {
                    value: 'Client.LastCallDate',
                    title: 'Call date'
                    },
                    {
                    value: 'Client.Name',
                    title: 'Client name'
                    }
                ]
                },
                {
                title: 'Proposal',
                menu: [
                    {
                    value: 'Proposal.SubmissionDate',
                    title: 'Submission date'
                    }
                ]
                },
                {
                value: 'Consultant',
                title: 'Consultant'
                },
                {
                value: 'Salutation',
                title: 'Salutation'
                }
            ]
            }}
      />
    </div>
  )
}