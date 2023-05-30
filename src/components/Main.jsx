import React from 'react'

const Main = () => {
  const inputStyle = {
    width: "1.5rem"
  }
  return (
    <div>
      <div className="inputs">
        <label htmlFor='deg'>Enter Highest degree of polynomial</label>
        <input
          id='deg'
          name='deg'
          type='text'
          style={inputStyle}
        />
        <label htmlFor='divisor'>Enter the divisor (n in x= n)</label>
        <input
          id='divisor'
          name='divisor'
          type='number'
          style={inputStyle}
        />
        <div className="coefficients">
          <input
            id='x^n'
            type="text"
            style={inputStyle}
          />
          <label htmlFor="x^n">X^n</label>
          <input
            id='x^n'
            type="text"
            style={inputStyle}
          />
          <label htmlFor="x^n">X^n</label>
          <input
            id='x^n'
            type="text"
            style={inputStyle}
          />
          <label htmlFor="x^n">X^n</label>
        </div>
        <div className="outputs">
          
        </div>
      </div>
      {/* <div className='input' */}
    </div>
  )
}

export default Main