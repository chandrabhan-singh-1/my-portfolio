import { atom, useAtom } from "jotai";

export const currentPageAtom = atom("intro");

const UI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500 
      ${currentPage === "home" ? "" : "opacity-0"}`}
      >
        <div className="h-[66%]"></div>
        <button
          onClick={() => setCurrentPage("store")}
          className="absolute top-[30rem] pointer-events-auto py-4 px-8 text-lg bg-gradient-to-b from-teal-600 to-sky-600 text-sky-100 tracking-wider font-black rounded-full cursor-pointer transition-colors duration-500 hover:scale-105 brightness-110"
        >
          ENTER
        </button>
      </section>
    </div>
  );
};

export default UI;
