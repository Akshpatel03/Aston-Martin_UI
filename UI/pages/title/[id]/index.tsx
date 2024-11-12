import { useRouter } from "next/router";

const Title = () => {
  const router = useRouter();
  const { id } = router.query;

  const titles: { [key: string]: string } = {
    "1": "First Title",
    "2": "Second Title",
    "3": "Third Title",
  };

  const title = titles[id as string] || "Title Not Found";

  return (
    <div>
      <h1>{title}</h1>
      <p>This is the Title {id}.</p>
    </div>
  );
};

export default Title;
