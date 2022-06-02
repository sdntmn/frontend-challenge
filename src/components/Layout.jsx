import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className='header'>
        <section className='header__section page__section'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? "header__active-link" : "header__page-link"
            }>
            Все котики
          </NavLink>
          <NavLink
            to='/favorites'
            className={({ isActive }) =>
              isActive ? "header__active-link" : "header__page-link"
            }>
            Любимые котики
          </NavLink>
        </section>
      </header>
      <main className='content'>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
