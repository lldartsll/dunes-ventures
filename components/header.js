import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { ScoreContext } from "@/lib/scoreContext";
import { useContext } from "react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [{ name: "Home", href: "/" }];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Delete Progress", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const AppHeader = () => {
  const { score, setScore } = useContext(ScoreContext);
  return (
    <div className="bg-gray-800 pb-32">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="border-b border-gray-700">
                <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="/ideas.png"
                        alt="Trivia Game"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link key={item.name} href={item.href} legacyBehavior>
                            <a
                              className={
                                "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                              }
                            >
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* local storage clear dropdown */}
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        onClick={() => {
                          localStorage.setItem("score", 0);
                          setScore(0);
                        }}
                      >
                        <TrashIcon
                          className="-ml-0.5 mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Clear Progress
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};
