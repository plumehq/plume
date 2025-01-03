import EmailInput from "@/components/email-input";
import { Button } from "@/components/button";

export default function Waitlist() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Newsletters without the noise
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          Focus on what matters - writing great content and growing your
          audience, we'll handle the rest.
        </p>
        <form className="flex w-full max-w-md flex-col items-center gap-4 mx-auto sm:flex-row sm:justify-center">
          <EmailInput />
          <Button type="submit" size="lg">
            Join waitlist
          </Button>
        </form>
      </div>
    </main>
  );
}
