import useAxiosFetch from "../hooks/useAxiosFetch";
import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {setPosts(data)
                  }, [data]);

  /*  useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await api.get("/posts");
            setPosts(response.data);
          } catch (error) {
            if (error.response) {
              // Not in 200 response range
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else {
              console.log(`Erroe:${error.message}`);
            }
          }
        };
        fetchPosts();
      }, []); */

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        posts,
        setPosts,
        searchResults,
        isLoading,
        fetchError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
