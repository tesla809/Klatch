import React from 'react'
import Link from 'next/link'

const linkArray = [
  { href: '', label: 'Start a group' },
  { href: '', label: 'Explore' },
  { href: '', label: 'Messages' },
  { href: '', label: 'Notifications' },
  { href: '', label: 'User Profile' },
];

const links = linkArray.map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
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

export default Nav
