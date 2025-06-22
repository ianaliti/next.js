import { auth } from "@/auth";
// import { StartupCardSkeleton } from "@/components/StartupCard";
// import UserStartups from "@/components/UserStartups";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";

import Image from "next/image";
import { notFound } from "next/navigation";
import { ReactElement, Suspense } from "react";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }): Promise<ReactElement> => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          
        </div>
      </section>
    </>
  );
};

export default Page;