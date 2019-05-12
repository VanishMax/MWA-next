import React from 'react'

export default () => (
  <React.Fragment>
    <h3 className="text-xl font-semibold text-center my-2">
      Counter itself
    </h3>
    <h3 className="text-xl text-center">0</h3>
    <div className="text-center">
      <button className="btn-gray-outlined">
        Increase
      </button>
      <button className="btn-gray-outlined">
        Decrease
      </button>
    </div>
  </React.Fragment>
)
