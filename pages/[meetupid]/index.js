import { server } from "../../config";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useRouter } from "next/router";

function MeetupDetails({ meetupData }) {
  const router = useRouter();
  const meetupid = router.query.meetupid;

  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <h1 style={{color:'#2d1b92'}}>Collection: {meetupid}</h1>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupid: "1",
        },
      },
      {
        params: {
          meetupid: "2",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `http://localhost:5000/comments/${params.meetupid}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true, // if there is no path it will set 404 page
    };
  }

  return {
    props: {
      meetupData: data,
    },
  };
}
export default MeetupDetails;
