'use client';
import {ChangeEvent, useState} from 'react';

export default function UploadFile({uploadedInfo, setUploadedInfo, files, setFiles}) {
  const setFileInfo = file => {
    const {name, size: byteSize, type} = file;
    const size = (byteSize / (1024 * 1024)).toFixed(2) + 'mb';
    setUploadedInfo({name, size, type});
  };

  const FileInfo = ({uploadedInfo}) => (
    <ul className='preview_info' style={{display: 'flex', gap: '5px'}}>
      {Object.entries(uploadedInfo).map(([key, value]) => (
        <li key={key}>
          <span className='info_key'>{key}</span>
          <span className='info_value'>{value}</span>
        </li>
      ))}
    </ul>
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setFileInfo(file);
    setFiles(Array.from(e.target.files));
  };

  return (
    <div>
      <input type='file' onChange={handleChange} />
      {/*{uploadedInfo && <FileInfo uploadedInfo={uploadedInfo} />}*/}
    </div>
  );
}
//
//
// const { useState } = React;
//

//
// const Logo = () => (
//   <svg className="icon" x="0px" y="0px" viewBox="0 0 24 24">
//     <path fill="transparent" d="M0,0h24v24H0V0z"/>
//     <path fill="#000" d="M20.5,5.2l-1.4-1.7C18.9,3.2,18.5,3,18,3H6C5.5,3,5.1,3.2,4.8,3.5L3.5,5.2C3.2,5.6,3,6,3,6.5V19  c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6.5C21,6,20.8,5.6,20.5,5.2z M12,17.5L6.5,12H10v-2h4v2h3.5L12,17.5z M5.1,5l0.8-1h12l0.9,1  H5.1z"/>
//   </svg>
// );
//
// const UploadBox = () => {
//   const [isActive, setActive] = useState(false);
//   const [uploadedInfo, setUploadedInfo] = useState(null);
//
//   const handleDragStart = () => setActive(true);
//   const handleDragEnd = () => setActive(false);
//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };
//
//
//   const handleDrop = (event) => {
//     event.preventDefault();
//     setActive(false);
//
//     const file = event.dataTransfer.files[0];
//     setFileInfo(file);
//   };
//
//   const handleUpload = ({ target }) => {
//     const file = target.files[0];
//     setFileInfo(file);
//   };
//
//   return (
//     <label
//       className={`preview${isActive ? ' active' : ''}`}
//       onDragEnter={handleDragStart}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragEnd}
//       onDrop={handleDrop}
//     >
//       <input type="file" className="file" onChange={handleUpload} />
//       {uploadedInfo && <FileInfo uploadedInfo={uploadedInfo} />}
//       {!uploadedInfo && (
//         <>
//           <Logo />
//           <p className="preview_msg">클릭 혹은 파일을 이곳에 드롭하세요.</p>
//           <p className="preview_desc">파일당 최대 3MB</p>
//         </>
//       )}
//     </label>
//   );
// };
