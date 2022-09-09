import MainNavigation from "../../components/layout/MainNavigation";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { getSession, useSession } from 'next-auth/react'

const Favourites = ({data}) => {
  const {data:session} = useSession()
  // console.log({ session })
  return (
    <>
      <Head>
        <title>Favourites</title>
      </Head>
      <div className="content">Favourites {data}</div>;
    </>
  );
};

export default Favourites;

//auth for server side rendering using get session 
export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/Favourites',
        permanent: false
      }
    }
  }
  return {
    props: {
      data: 'List of 10 blogs',
      session
    }
  }
}


//to remove footer seperately 
// Favourites.getLayout = function PageLayout(page) {
//   return (
//     <>
//       <SessionProvider>
//         <MainNavigation />
//         {page}
//       </SessionProvider>
//     </>
//   );
// };
