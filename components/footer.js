import React from 'react'
import Link from 'next/link'


const Footer = ({data}) => {
  const links = data.map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
  })
  
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
          margin: 0;
          padding-bottom: 10%;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          background-color: rgba(15, 23, 33, 0.87);
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
          color: #FFFAFA;
          text-decoration: none;
          font-size: 18px;
        }
        a:hover {
          color: rgba(255, 245, 195, 0.87);
        }
      `}</style>
    </nav>
  )
}

export default Footer;
