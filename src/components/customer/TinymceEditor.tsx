'use client';
import React, {forwardRef, useRef, useState} from 'react';
import tinymce from 'tinymce';
import {Editor} from '@tinymce/tinymce-react';

const TinymceEditor = forwardRef((props, ref: React.ForwardedRef<any>) => {
  const [content, setContent] = useState<string>(props?.content!);

  return (
    <div style={{border: '1px solid #ccc', borderRadius: '5px'}}>
      <Editor
        id='tinymceEditor'
        tinymceScriptSrc={'\\assets\\libs\\tinymce6\\js\\tinymce\\tinymce.min.js'}
        onInit={(evt, editor) => (ref!.current = editor)}
        value={content}
        onEditorChange={(content, editor) => setContent(content)}
        //initialValue={content}
        //outputFormat="text"

        init={{
          language: 'ko_KR',
          height: 500,
          skin: 'oxide',
          menubar: false,
          statusbar: false,
          plugins: ['image', 'media', 'link', 'lists', 'table', 'code'],
          toolbar: [
            {name: 'history', items: ['undo', 'redo']},
            // {name: 'styles', items: ['styles']},
            {name: 'font', items: ['fontFamily', 'fontsize']},
            {name: 'formatting', items: ['bold', 'underline', 'italic', 'strikethrough']},
            {name: 'colors', items: ['forecolor', 'backcolor']},
            {name: 'alignment', items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify']},
            {name: 'indentation', items: ['outdent', 'indent']},
            {name: 'media', items: ['image', 'insertfile', 'link', 'table', 'code']},
          ],
          toolbar_mode: 'wrap',
          image_description: false,
          image_dimensions: false,
          file_picker_types: 'image',
          paste_data_images: true,
          /* and here's our custom image picker*/
          // file_picker_callback: function (callback, value, meta) {
          //   if (meta.filetype === 'image') {
          //     const input = document.createElement('input');
          //     input.type = 'file';
          //     input.click();
          //
          //     input.onchange = function () {
          //       let file = (input as any)?.files[0];
          //       let reader = new FileReader();
          //       reader.onload = function (e: ProgressEvent<FileReader>) {
          //         console.log('base64code--------->', (e.target as FileReader).result);
          //         // [TODO] backend로 보내서 이미지 링크로 받아온걸로 넣어주기
          //         callback((e.target as FileReader).result, {
          //           alt: file.name,
          //         });
          //       };
          //       reader.readAsDataURL(file);
          //     };
          //   }
          // },
          // 드래그앤드롭시 이미지 백엔드로 업로드하는 로직 작성 (Promise 반환해야함!!)
          // images_upload_handler: (blobInfo, progress) => {
          //   console.log('111');
          //   try {
          //     return;
          //   } catch (e) {}
          // },
          font_css: '/assets/fonts/fonts.css',
          font_family_formats: '나눔고딕=Nanum Gothic; 나눔명조=Nanum Myeongjo; Noto Sans KR=Noto Sans KR;',
          content_style: `@import url('/assets/fonts/fonts.css'); body { font-family:Nanum Gothic,Noto Sans KR,sans-serif; font-size:14px }`,
        }}
      />
    </div>
  );
});

TinymceEditor.displayName = 'TinymceEditor';

export default TinymceEditor;
