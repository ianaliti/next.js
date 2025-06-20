import React from 'react'
import Link from 'next/link';

const Page = () => {
  return (
    <div>
        <h1>Users</h1>

        <ul className='text-2xl'>
            <Link href="/dashboard/users/1"><li>User1</li></Link>
            <Link href="/dashboard/users/2"><li>User2</li></Link>
            <Link href="/dashboard/users/3"><li>User3</li></Link>
            <Link href="/dashboard/users/4"><li>User4</li></Link>
        </ul>

    </div>
  )
}

export default Page;