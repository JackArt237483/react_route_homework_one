import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav>
        <ul className='navigate_link'>
          <li>
            <NavLink to="/">
              PostPage
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">
              CreatePost
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
      <footer>This is some Content</footer> {/* Исправьте "some" на "is" */}
    </div>
  )
}

export default Layout
