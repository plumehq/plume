"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import { FeatherLogo } from "@/components/logo/feather";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

export default function Onboarding() {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const subdomain = formData.get("subdomain") as string;
    const companyAddress = formData.get("companyAddress") as string;

    try {
      // Get the current user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("No user found");

      // Update the user's metadata in your database
      // const { error } = await supabase.from("profiles").upsert({
      //   id: user.id,
      //   first_name: firstName,
      //   subdomain: subdomain,
      //   company_address: companyAddress,
      //   updated_at: new Date().toISOString(),
      // });

      // if (error) throw error;

      // Redirect to dashboard using Next.js router
      router.push("/dashboard");
    } catch (error) {
      toast.error("Error saving your information", {
        description: "Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <FeatherLogo className="h-12 w-auto" />
          </div>
          <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Complete your profile
          </h2>
          <p className="mt-2 text-center text-sm/6 text-gray-600">
            Tell us a bit about yourself and your company
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="First name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subdomain"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Subdomain
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="subdomain"
                      id="subdomain"
                      required
                      className="block w-full rounded-l-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      placeholder="custom subdomain"
                    />
                    <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                      .plume.sh
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="companyAddress"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Company Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="companyAddress"
                    name="companyAddress"
                    required
                    placeholder="123 Main Street, New York, NY, 10000"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Complete Setup"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
