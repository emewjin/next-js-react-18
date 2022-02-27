import type { NextPage } from "next";
import { useState } from "react";


const Home: NextPage = () => {
  const [foo, setFoo] = useState(false)
  
  const handler = () => {
    setFoo(!foo)
  }

  return (
    <form className={`grid gap-10 ${foo ? 'bg-red-50' : 'bg-cyan-50'}`}>
      <label className="flex justify-center">
        이름
        <input placeholder="name" name="name" className="ml-10" />
      </label>
      <label className="flex justify-center">
        이메일
        <input placeholder="email" name="email" type="email" className="ml-10"/>
      </label>
      <label className="flex justify-center" >
        비밀번호
        <input placeholder="password" name="password" type="password" className="ml-10"/>
      </label>
      <button onMouseOver={handler} type="submit">회원가입</button>
    </form>
  );
};

export default Home;
