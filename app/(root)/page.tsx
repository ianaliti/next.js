import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams.query;

  const posts = [
    {
      _createdAt: new Date(),
      title: "Startup Idea 1",
      description: "Description for startup idea 1",
      category: "Technology",
      image: "https://placeholder.co/48x48",
      views: 150,
      author: {
        _id: 1,
        name: "John Doe",
        image: "/images/author1.jpg",
      }
    }
  ]

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
          {query ? `Search results for ${query}` : 'All Startups' }
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
