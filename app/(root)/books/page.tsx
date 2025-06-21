async function Page() {
    const res = await fetch('http://localhost:3000/api/books')
    const books = await res.json();

    return (
        <main>
            <code>{JSON.stringify(books, null, 2)}</code>
        </main>
    )
}

export default Page;