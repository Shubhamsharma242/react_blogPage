import React from "react";
import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = ({ isLoading, fetchError }) => {
  const  searchResults  = useStoreState((state) => state.searchResults);
  return (
    <main className="Home">
      {isLoading && <p>Loading Posts... </p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          Network Error
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p style={{ marginTop: "2rem" }}> No post to display</p>
        ))}
    </main>
  );
};

export default Home;

/* {posts.length ? (
  <Feed posts={posts} />
) : (
  <p style={{ marginTop: "2rem" }}> No post to display</p>
)} */
