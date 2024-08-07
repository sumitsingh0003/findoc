import {React, useState} from 'react'

const Index = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [file, setFile] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setFile(null);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const options = [
    {
      value: 'Bank Statement',
      label: 'Bank Statement',
      instructions: [
        'Sign exactly as per your PAN card signature',
        'Use Blue/Black pen to sign on a blank paper',
        'Upload a closeup clear picture of the signature'
      ]
    },
    {
      value: 'Net Worth Certificate',
      label: 'Net Worth Certificate',
      instructions: [
        'Sign exactly as per your PAN card signature',
        'Use Blue/Black pen to sign on a blank paper',
        'Upload a closeup clear picture of the signature'
      ]
    },
    {
      value: 'DP Holding Statement',
      label: 'DP Holding Statement',
      instructions: [
        'Sign exactly as per your PAN card signature',
        'Use Blue/Black pen to sign on a blank paper',
        'Upload a closeup clear picture of the signature'
      ]
    },
    {
      value: 'IT Return (Last year)',
      label: 'IT Return (Last year)',
      instructions: [
        'Sign exactly as per your PAN card signature',
        'Use Blue/Black pen to sign on a blank paper',
        'Upload a closeup clear picture of the signature'
      ]
    },
    {
      value: 'Salary Slip (Last month)',
      label: 'Salary Slip (Last month)',
      instructions: [
        'Sign exactly as per your PAN card signature',
        'Use Blue/Black pen to sign on a blank paper',
        'Upload a closeup clear picture of the signature'
      ]
    }
  ];
  return (
    <>
      <div className='slctBnkHdng fnnclHndg'>
        <h2>Trade in Futures and options</h2>
      </div>

      <div className="document-upload">

      <div className="options">
        {options.map(option => (
          <label key={option.value} className='option-label'>
            <div className='upldStatementContent'>
              <input
                type="radio"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
              />
              <span>{option.label}</span>
              {selectedOption === option.value && (
                <>
                  <ul>
                    {option.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                  <div className='upldStatementBtn'>
                    <input
                      type="file"
                      id={`file-upload-${option.value}`}
                      style={{ display: 'none' }}
                      accept=".jpg,.jpeg,.png,.heic,.pdf,.doc"
                      onChange={handleFileChange}
                    />
                    <label htmlFor={`file-upload-${option.value}`}>
                      <button>{file ? file.name : 'Upload ' + option.label}</button>
                    </label>
                  </div>
                </>
              )}
            </div>
          </label>
        ))}
      </div>
      {file && (
        <div className="file-info">
          <p>Selected file: {file.name}</p>
        </div>
      )}
      <p className="note">
        As per SEBI & Exchange regulations, you are required to share your proof of income to enable trading in Futures & Options segment.
      </p>
    </div>
    </>
  )
}

export default Index
