import {prisma} from "@/lib/database";

function Page({ records }) {
  console.log(records);
  return <div>{JSON.stringify(records)}</div>
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const user = await prisma.enrolment.create({
    data: {
      token: 'lol'
    },
  });

  const allUsers = await prisma.enrolment.findMany();
  console.log(allUsers);
  // Pass data to the page via props
  return { props: { allUsers } }
}

export default Page
