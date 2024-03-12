import { Suspense, useState } from "react";
import SearchInput from "../components/SearchInput";
import User from "../components/User/User";
import { UserProps } from "../types/user";
import Error from "../components/error/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error , setError] = useState(false)

  const fetchData = async (userName: string) => {
    setError(false)
    setUser(null)
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (response.status === 404) {
        setError(true);
        return;
      }
      const userData = await response.json();
      setUser(userData);

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="w-full h-auto rounded-md bg-sky-800 p-4">
      <Suspense fallback={<h2>Carregando...</h2>}>
        <SearchInput loadUser={fetchData} />
        {user && <User {...user} />}
        {error && <Error/>}
      </Suspense>
    </div>
  );
};

export default Home;
