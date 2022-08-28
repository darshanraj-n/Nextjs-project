import classes from "./MainNavigation.module.css";
import Link from "next/link";

// import {  useSession } from 'next-auth/client'
import { signIn, signOut, useSession } from "next-auth/react";


function MainNavigation() {
  // const {session, loading} = useSession()
  // console.log( {session, loading});
  const { data:session } = useSession()
console.log(session);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>(-_-)</div>
      <nav>
        <ul className>
          <li>
            <Link href="/">Collections</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New </Link>
          </li>
          <li>
            <Link href="">Favourites</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>

          { !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn('github')
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href='/api/auth/signout'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </a>
            </Link>
          </li>
        )}
          
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
