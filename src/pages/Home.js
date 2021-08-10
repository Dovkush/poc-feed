import React from "react";
import Layout from "../layouts/Home";
import Feed from "../components/Feed/Feed";
export default function HomePage() {
  return (
    <>
      <Layout>
        <Feed />
      </Layout>
    </>
  );
}
