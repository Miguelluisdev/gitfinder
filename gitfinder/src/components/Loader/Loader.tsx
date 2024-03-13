import { IoReloadOutline } from "react-icons/io5";

const Loader = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-3">
        <IoReloadOutline className="h-10 w-10 animate-spin" />
      </div>
    </>
  );
};

export default Loader;
