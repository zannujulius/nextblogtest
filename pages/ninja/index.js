// the getStaticProps is run at build time as
// the template for each page is prerendered
// a fetch request
// only that should be run ta build time should
// be in the getStaticProps
import axios from "axios";
import Link from "next/link";
import styles from "../../styles/Ninja.module.css";
export const getStaticProps = async () => {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);

    return {
      props: {
        ninjas: res.data,
      },
    };
  } catch (err) {
    console.log(err.response);
  }
};

const AllNinja = ({ ninjas }) => {
  return (
    <div>
      <p>All ninjas</p>
      {ninjas.map((ninja, _) => (
        <div key={ninja.id}>
          <Link href={`/ninja/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllNinja;
