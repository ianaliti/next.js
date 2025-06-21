import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUP_QUERY); 

  console.log(JSON.stringify(posts, null, 2));

  return (
    <>
      <section className="green_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold"></p>
           {query ? `Search results for "${query}"` : 'All Startups'}
          <ul className="startup-cards-container">

            { posts?.length > 0 ? (
                posts?.map((post: StartupCardType) => (
                  <StartupCard key={post?.author._id} post={post}/>
                ))
            ) : (
              <p className="no-result">No results</p>    
            )}
          </ul> 
      </section>
    </>
  );
}
