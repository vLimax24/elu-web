import { SignInButton, GoogleOneTap } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <SignInButton mode="modal">
        <button className="bg-gray-500 px-4 py-2 rounded-lg">Sign In</button>
      </SignInButton>
      <GoogleOneTap />
    </div>
  );
}
