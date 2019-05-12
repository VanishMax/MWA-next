import React from 'react'

export default () => (
  <React.Fragment>
    <h3 className="text-xl font-semibold text-center">
      Counter itself
    </h3>
    <div className="text-center">
      <button className="btn-gray-outlined">
        Increase
      </button>
      <span className="text-xl">0</span>
      <button className="btn-gray-outlined">
        Decrease
      </button>
    </div>
  </React.Fragment>
)
