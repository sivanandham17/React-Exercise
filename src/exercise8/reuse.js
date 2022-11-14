import React from 'react'

const reuse = () => {
  return (
    <div>
      <div className="main">
      <h1>Reusable components</h1>
      <div className="search-form">
        <Form>
          <InputControl name="Fruit" label="Enter Fruit" placeholder="Type a Fruit name"/>
        </Form>
      </div>
    </div>
    </div>
  )
}

export default reuse
