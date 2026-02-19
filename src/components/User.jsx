import '../stylesheets/User.css'

export const User = () => {
  return (
    <>
    <div className="card">
  <div className="card-header">
    <div className="icon-wrapper">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <rect x="7" y="7" width="10" height="10" rx="1"/>
      </svg>
    </div>
    <div className="card-text">
      <h2>StyleSpy</h2>
      <p>Instantly analyze and copy CSS from any webpage element.</p>
    </div>
  </div>

  <div className="card-footer">
    <button className="btn-remove" onClick="handleRemove()">Remove</button>
    <label className="toggle">
      <input type="checkbox" checked id="toggleSwitch" onChange="handleToggle(this)"/>
      <span className="slider"></span>
    </label>
  </div>
</div>
    </>
  )
}
