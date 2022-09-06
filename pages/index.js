import MeetupList from "../components/meetups/MeetupList";
import { url } from "../config";
import Error from "next/error";
import axios from "axios";

function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

// export async function getStaticProps() {
// 	const   {data:articles} = await axios.get(`${url}/api/new-meetup`);

// 	return {
// 		props: {
// 			meetups: articles
// 		},
// 		revalidate: 1,
// 	};
// }

export async function getStaticProps() {
  const articles = await axios.get(`${url}/api/new-meetup`)

    .then((res) => {
      if (res.ok === false) {
        throw Error("no data", res.statusText);
      }
      return res.data;
    })

    .catch((err) => {
      console.log(err);
    });
    
  return {
    props: {
      meetups: articles,
    },
    revalidate: 1,
  };
}

// export async function getStaticProps() {
//     let articles;
//     try {
//       const res = await fetch(`${url}/api/new-meetup`);
//       articles = await res.json();
//     } catch (error) {
//       console.log(error);
//       articles = [];
//     }

//     return {
//       props: {
//         meetups: articles,
//       },
//       // revalidate:1
//     };
//   }

export default HomePage;
