import '../stylesheets/User1.css'

export const User1 = () => {
  return (
    <>
     <div className="extensions-bar">
    <div className="extensions-left">
      <svg className="ext-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C14.3 4 13 5.3 13 7C13 8.2 13.7 9.2 14.7 9.7C13.5 10 12.5 10.8 12 11.9C11.5 10.8 10.5 10 9.3 9.7C10.3 9.2 11 8.2 11 7C11 5.3 9.7 4 8 4C6.3 4 5 5.3 5 7C5 8.5 6 9.8 7.4 10.1C6.1 10.7 5.2 12 5.2 13.5C5.2 15.5 6.8 17.1 8.8 17.1C9.5 17.1 10.1 16.9 10.6 16.6C10.3 17.1 10.1 17.7 10.1 18.4C10.1 20.4 11.7 22 13.7 22H18.3C20.3 22 21.9 20.4 21.9 18.4C21.9 17.7 21.7 17.1 21.4 16.6C21.9 16.9 22.5 17.1 23.2 17.1C25.2 17.1 26.8 15.5 26.8 13.5C26.8 12 25.9 10.7 24.6 10.1C26 9.8 27 8.5 27 7C27 5.3 25.7 4 24 4C22.3 4 21 5.3 21 7C21 8.2 21.7 9.2 22.7 9.7C21.5 10 20.5 10.8 20 11.9C19.5 10.8 18.5 10 17.3 9.7C18.3 9.2 19 8.2 19 7C19 5.3 17.7 4 16 4Z" fill="#e05a4e"/>
        <circle cx="16" cy="16" r="3.5" fill="#c94040"/>
      </svg>

      <span className="extensions-title">Extensions</span>
    </div>

    <button className="settings-btn" aria-label="Settings">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="2" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="22" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    </button>
  </div>
    </>
  )
}
