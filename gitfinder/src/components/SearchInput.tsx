import { useState , KeyboardEvent } from "react";
import { FaSearch } from "react-icons/fa";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const SearchInput = ({ loadUser }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    loadUser(inputValue);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter"){
      loadUser(inputValue)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center rounded-sm w-full h-auto">
      <h2 className="text-lg font-bold mb-2">Busque um usuário do GitHub:</h2>
      <p className="text-sm text-gray-200 mb-4">Conheça seus melhores repositórios</p>
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
      </div>
      <button onClick={handleClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Buscar
      </button>
    </div>
  );
};

export default SearchInput;
