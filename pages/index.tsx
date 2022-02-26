import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="group">
      <div className=" flex flex-col space-y-12 bg-slate-400 py-20 px-10">
        <div className="rounded-2xl bg-white p-10 shadow-2xl">
          <span className=" text-3xl font-semibold group-hover:text-red-400">SelectItem</span>
          <div>
            <span className="text-gray-500">GreyChair</span>
            <span className="text-gray-500">16% discount</span>
            <div className="group">
              <input type="radio" name="apple" className="group-hover:bg-red" />
              <input type="radio" name="apple" className="disabled:text-cyan-200" />
              <input type="radio" name="apple" />
              <input type="radio" name="apple" />
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-10 shadow-2xl">
          <input required />
          <span className="peer-invalid:text-red-500">error!</span>
        </div>
        <div className="rounded-2xl bg-white p-10 shadow-2xl"></div>
        <div className="rounded-2xl bg-white p-10 shadow-2xl"></div>
      </div>
    </div>
  );
};

export default Home;
