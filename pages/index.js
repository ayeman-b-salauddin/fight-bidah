import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "topics" });

  return {
    props: {
      topicsDetails: res.items,
    },
  };
}

export default function Home({ topicsDetails }) {
  console.log(topicsDetails);
  return (
    <div className="topic">
      {topicsDetails.map((topics) => (
        <div key={topics.sys.id}> {topics.fields.title}</div>
      ))}
    </div>
  );
}
