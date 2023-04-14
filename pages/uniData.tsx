import { prisma } from '@/lib/database';

function Page({ allRecords }) {
  return (
    <div>
      <form action="/api/addUser" method="POST">
        Enter given name:
        <input name="givenName" />
        <br />
        Enter family name:
        <input name="familyName" />
        <br />
        Enter birthdate (YYYY-MM-DD):
        <input name="birthdate" />
        {' '}
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>{allRecords.map(((record) => <div key={record.id}>{JSON.stringify(record)}</div>))}</div>

    </div>
  );
  // return
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  const allUsers = await prisma.enrolment.findMany();
  return { props: { allRecords: allUsers } };
}

export default Page;
