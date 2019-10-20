import React from 'react'

const Nav = ({ data }) => {
  const links = data.map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
  });

  return (
    <nav>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
  
      <style jsx>{`
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #ED1C40;
          text-decoration: none;
          font-size: 18px;
        }
  
        a:hover {
          color: black;
        }
      `}</style>
    </nav>
  )
} 

export default Nav
