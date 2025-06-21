import Image from "next/image";

export default function Home() {

  throw new Error("This is a test error");
  
  return (
    <div className="text-3xl">
      <h1>Hello</h1>
    </div>
  );
}
