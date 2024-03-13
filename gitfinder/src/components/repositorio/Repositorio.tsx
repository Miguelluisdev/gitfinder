import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineFork } from "react-icons/ai"; // Importing icons from react-icons

type RepoProps = {
  name: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
};

const Repositorio = ({
  name,
  html_url,
  language,
  stargazers_count,
  forks_count,
}: RepoProps) => {
  return (
    <div className={`bg-slate-900 text-white p-4 rounded-lg mb-4 grid grid-row-1 md:grid-row-2 lg:grid-cols-5 gap-4`}>
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <div>
        <p>
          <span className="inline-block align-middle mr-1">
            <AiFillStar />
          </span>
          Stars: {stargazers_count}
        </p>
        <p>
          <span className="inline-block align-middle mr-1">
            <AiOutlineFork />
          </span>
          Forks: {forks_count}
        </p>
      </div>
      <div>
        <p>Language: {language}</p>
        <Link to={html_url} className="text-blue-400 hover:text-blue-200">
          Veja o repositório
        </Link>
      </div>
    </div>
  );
};

export default Repositorio;
