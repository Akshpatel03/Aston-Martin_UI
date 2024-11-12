import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/about");
  };
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleRedirect}>Go to About Page</button>
    </div>
  );
};
export default Home;
