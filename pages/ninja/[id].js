// to get the router parameters

import axios from "axios";
import Head from "next/head";

// we use getStaticPaths
// how static paths/pages/template to generate
export const getStaticPaths = async () => {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const paths = res.data.map((ninja, _) => {
      return {
        params: { id: ninja.id.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    // cons
  }
};
// we are making this request by the length we
// have in the response array
export const getStaticProps = async (context) => {
  try {
    let id = context.params.id;
    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return {
      props: { ninja: res.data },
    };
  } catch (err) {
    console.log(err);
  }
};

const Details = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>{ninja?.name}</title>
        <meta name="description" content={ninja?.company.catchPhrase} />
        <meta property="og:url" content="https://brodservices.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ninja?.name} />
        <meta property="og:description" content={ninja?.company.catchPhrase} />
        <meta
          property="og:image"
          content="https://imageurlserver.herokuapp.com/images/gap.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="brodservices.com" />
        <meta property="twitter:url" content="https://brodservices.com/" />
        <meta name="twitter:title" content={ninja?.name} />
        <meta name="twitter:description" content={ninja?.company.catchPhrase} />
        <meta
          name="twitter:image"
          content="https://brodservices.comundefined"
        />
      </Head>
      <div>
        <h1>{ninja.name}</h1>
        <div>{ninja.email}</div>
        <div>{ninja.website}</div>
        <div>{ninja.address.city}</div>
      </div>
    </>
  );
};

export default Details;
