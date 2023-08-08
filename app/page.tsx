import UserCard from "@components/UserCard";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
const App = async () => {
  const session = await getServerSession(options);
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          API Interaction
          <br className="max-mid:hidden" />
          <span className="orange_gradient text-center">Application</span>
        </h1>
        <p className="desc text-center">Welcome {session && 'user' }!</p>
        {session && <UserCard user={session?.user} pagetype={"Home"} />}
      </section>
    </>
  );
};

export default App;
