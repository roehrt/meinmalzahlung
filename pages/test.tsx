import {prisma} from "@/lib/database";

function Page({ allRecords }) {
  console.log(allRecords);
  return <div>
    <form action="submit">

    </form>
  </div>
  //return <div>{allRecords.map(((record)=> <div key={record.id}>{JSON.stringify(record)}</div>))}</div>
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const user = await prisma.enrolment.create({
    data: {
      token: 'lol'
    },
  });

  //const allUsers = await prisma.enrolment.findMany();
  // Pass data to the page via props
  return { props: { allRecords: allUsers } }
}

export default Page
