import { Link } from "react-router-dom";
import { UserProps } from "../../types/user";

const User = ({ login, avatar_url, followers, following, location, created_at, name, public_repos }: UserProps) => {
  return (
    <div className="flex flex-col items-center p-5 mt-5 bg-slate-600">
      <img src={avatar_url} alt={name} className="w-32 h-32 rounded-full mx-auto mb-2" />
      <h2 className="text-white text-2xl font-bold text-center mb-1">{name}</h2>
      <p className="text-gray-300 text-lg text-center">@{login}</p>
      <p className="text-gray-400 text-center mt-2">Localização: {location}</p>
      <p className="text-gray-400 text-center mt-2">Data de criação: {created_at}</p>
      <div className="flex items-center justify-center flex-col mt-4">
        <div className="mx-4 mb-2">
          <p className="text-white font-bold">Seguidores</p>
          <p className="text-gray-300 text-center">{followers}</p>
        </div>
        <div className="mx-4 mb-2">
          <p className="text-white font-bold">Seguindo</p>
          <p className="text-gray-300 text-center">{following}</p>
        </div>
        <div className="mx-4 mb-2">
          <p className="text-white font-bold">Repositórios Públicos</p>
          <p className="text-gray-300 text-center">{public_repos}</p>
        </div>
        <div className="mx-4 mb-2">
          
          <Link to={`/repos/${login}`} className="text-white font-bold" >Veja os projetos</Link>
        </div>
      </div>
    </div>
  );
};

export default User;
