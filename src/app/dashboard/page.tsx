"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronRightIcon,
  EnvelopeIcon,
  PencilSquareIcon,
  Squares2X2Icon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FeatherLogo } from "@/components/logo/feather";
import { Toaster } from "sonner";
import { SettingsProvider } from "@/components/editor/settings";
import { PlateEditor } from "@/components/editor/plate-editor";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "#", icon: Squares2X2Icon, current: true },
  { name: "Write", href: "#", icon: PencilSquareIcon, current: false },
  { name: "Audience", href: "#", icon: UsersIcon, current: false },
  { name: "Letters", href: "#", icon: EnvelopeIcon, current: false },
];

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <div className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear" />

          <div className="fixed inset-0 flex">
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out">
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <div className={cn("flex h-16 shrink-0 items-center")}>
                  <div
                    className={cn(
                      "flex items-center justify-center min-w-[40px]",
                      isExpanded ? "mx-6" : "mx-auto"
                    )}
                  >
                    {isExpanded ? (
                      <FeatherLogo className="h-6 w-6 shrink-0" />
                    ) : (
                      <FeatherLogo className="h-6 w-6 shrink-0" />
                    )}
                  </div>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={cn(
                                item.current
                                  ? "bg-gray-50 text-gray-600"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-600",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={cn(
                                  item.current
                                    ? "text-gray-600"
                                    : "text-gray-400 group-hover:text-gray-600",
                                  "size-6 shrink-0"
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Desktop sidebar */}
        <div
          className={cn(
            "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-width duration-300 ease-in-out",
            isExpanded ? "lg:w-64" : "lg:w-16"
          )}
        >
          {/* Chevron button - moved outside main sidebar */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute -right-3 top-[50px] z-50 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50"
          >
            <ChevronRightIcon
              className={cn(
                "h-3 w-3 text-gray-400 transition-transform duration-300",
                isExpanded ? "rotate-180" : ""
              )}
            />
          </button>

          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white">
            <div className={cn("flex h-16 shrink-0 items-center")}>
              <div
                className={cn(
                  "flex items-center justify-center min-w-[40px]",
                  isExpanded ? "mx-6" : "mx-auto"
                )}
              >
                {isExpanded ? (
                  <FeatherLogo className="h-6 w-6 shrink-0" />
                ) : (
                  <FeatherLogo className="h-6 w-6 shrink-0" />
                )}
              </div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={cn(
                            item.current
                              ? "bg-gray-50 text-black-900"
                              : "text-gray-700 hover:bg-gray-50 hover:text-black-900",
                            "group flex gap-x-3 rounded-md p-2 mx-6",
                            isExpanded ? "" : "justify-center"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={cn(
                              item.current
                                ? "text-black-900"
                                : "text-gray-400 group-hover:text-black-900",
                              "size-6 shrink-0"
                            )}
                          />
                          <span
                            className={cn(
                              "text-sm/6 font-semibold whitespace-nowrap transition-all duration-300 ease-in-out",
                              !isExpanded && "w-0 opacity-0 overflow-hidden"
                            )}
                          >
                            {item.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className={cn(
                      "flex items-center px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50",
                      !isExpanded && "justify-center"
                    )}
                  >
                    <img
                      alt=""
                      src="https://utfs.io/f/ihozsLgPeu27RHXMxh3Qzo4HrFMIhZ0dPWO86Bsy7SYJLbDE"
                      className="size-8 rounded-full bg-gray-50"
                    />
                    {isExpanded && (
                      <>
                        <span className="sr-only">Your profile</span>
                        <span className="ml-4" aria-hidden="true">
                          abby
                        </span>
                      </>
                    )}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div
          className={cn(
            "lg:pl-20 transition-[padding] duration-300",
            isExpanded && "lg:pl-72"
          )}
        >
          <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
            <div className="flex-1 text-sm/6 font-semibold text-gray-900">
              Dashboard
            </div>
            <a href="#">
              <span className="sr-only">Your profile</span>
              <img
                alt=""
                src="https://utfs.io/f/ihozsLgPeu27RHXMxh3Qzo4HrFMIhZ0dPWO86Bsy7SYJLbDE"
                className="size-8 rounded-full bg-gray-50"
              />
            </a>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl rounded-lg border border-gray-200 bg-white shadow-sm">
                <div
                  className="h-[800px] w-full overflow-y-auto p-4"
                  data-registry="plate"
                >
                  <SettingsProvider>
                    <PlateEditor />
                  </SettingsProvider>
                  <Toaster />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
