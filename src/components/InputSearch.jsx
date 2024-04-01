import { useState } from 'react';

export default function InputSearch(){

    const [value, setValue] = useState()

    const handleClear = () => {
      setValue('');
    };


  return(
    <div className='inputSearch'>
      <input type='text' name='city' value = {value} onChange= {(e)=>setValue(e.target.value)} placeholder='Enter city...' />
      {value && (
        <button className='closeBtn' onClick={handleClear}>
          &#x2715;
        </button>
      )}
    </div>
  )
}