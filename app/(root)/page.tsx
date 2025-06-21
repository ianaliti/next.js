import SearchForm from "../components/SearchForm";

export default async function Home() {
  return (
    <section className="green_container">
      <h1 className="heading">
        Pitch Your Startup, <br />
        Connect with Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition
      </p>

      <SearchForm />
    </section>
  );
}
