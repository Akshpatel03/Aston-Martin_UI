import { useRouter } from "next/router";

const SubTitle = () => {
  const router = useRouter();
  const { id, subId } = router.query;

  const SubTitles: { [key: string]: { subTitle: string } } = {
    "1": { subTitle: "First Post SubTitle" },
    "2": { subTitle: "Second Post SubTitle" },
    "3": { subTitle: "Third Post SubTitle" },
  };

  const subTitle = SubTitles[id as string];

  if (!subTitle) {
    return <div>Sub Title Not Found</div>;
  }

  return (
    <div>
      <h1>{subTitle.subTitle}</h1>
      <p>
        This is the subTitle {id} with {subId}.
      </p>
    </div>
  );
};

export default SubTitle;
