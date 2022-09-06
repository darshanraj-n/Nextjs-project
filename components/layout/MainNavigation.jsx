import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";


function MainNavigation() {
  // const {data:session, loading} = useSession()
  // console.log( {session, loading});
  const { data:session } = useSession()
// console.log({session});

  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link href="/"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oDMVNt-S-c_lT-hSxFRutdvRGCJZi6ka_w&usqp=CAU" alt="" /></Link></div>

      <h2 style={{color:'white'}}> {session ? `${session.user.name} ` : ''}</h2>
      
      <nav>
        <ul > 
          <li  className={`${!session  ? 'session' : 'loaded'}`} >
            <Link href="/">Collections</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New </Link>
          </li>
          <li>
            <Link href="/Favourites">Favourites</Link>
            <sup style={{color:'red'}}>New</sup>
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
// className={`${!session  ? 'session' : 'loaded'}`}
export default MainNavigation;
