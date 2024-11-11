import Link from "next/link";

const TitleList = () => {
  const Title = [
    { id: "1", title: "First Title" },
    { id: "2", title: "Second Title" },
    { id: "3", title: "Third Title" },
  ];

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {Title.map((Title) => (
          <li key={Title.id}>
            <Link href={`/title/${Title.id}`}>{Title.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TitleList;
