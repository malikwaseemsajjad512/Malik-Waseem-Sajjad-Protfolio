import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <a href="#home">
            <img src="/images/38be943e8f5bbd3ece2b0795a90f6707.jpg" alt="Logo" style={{ height: 44, width: 'auto' }} />
          </a>
        </div>
        <ul id="nav-menu" className={open ? 'open' : ''}>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
          <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
        <div className="hamburger" onClick={() => setOpen(prev => !prev)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  )
}
