import React, { useState } from 'react'

export default function SearchLoaction() {
  const [location, setLocation] = useState("newYork")
  return (
    <div>
      <form>
        <label>
          Location : <input value={location} onChange={e => setLocation(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
