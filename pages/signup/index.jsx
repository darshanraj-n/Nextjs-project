import MainNavigation from "../../components/layout/MainNavigation";
import Head from 'next/head'

const Signup = () => {
  return(
    <>
    <Head>
      <title>Signup</title>
    </Head>
    <div className="content">Signup</div>;
    </>
  )
};

export default Signup;


//to remove footer seperately for signup page
Signup.getLayout = function PageLayout(page) {  
  return (
    <>
      <MainNavigation />
      {page}
    </>
  );
};
