import React from 'react';
import { getSession } from '@/utils/session';

async function Page() {
  const session = await getSession();

  return (
    <>
      {session?.user && (
        <div>{JSON.stringify(session.user)}</div>
      )}
    </>
  );
}

export default Page;