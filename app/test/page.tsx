import { unstable_cache } from "next/cache";

export const dynamic = "force-dynamic";

const getRandomNumber = unstable_cache(
  async () => {
    await new Promise((res) => setTimeout(res, 3000));

    return Math.round(Math.random() * 1000);
  },
  ["random"],
  {
    tags: ["random"],
    revalidate: 60,
  }
);

const TestPage = async () => {
  const randomNumber = await getRandomNumber();

  return (
    <>
      <h1>Congrats</h1>
      <p>Random number: {randomNumber}</p>
    </>
  );
};

export default TestPage;
