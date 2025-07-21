"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

interface HelpItem {
  title: string;
  description: string;
  image: string;
  Link: string;
}

interface HelpTopic {
  category: string;
  items: HelpItem[];
}

const helpTopics: HelpTopic[] = [
  {
    category: "Client Profile",
    items: [
      {
        title: "Create client profiles",
        description:
          "Capturing complete and accurate client info ensures smooth appointment booking, personalized communication, and better tracking.",
        image:
          "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "client/createclient",
      },
      {
        title: "Update client details",
        description:
          "Ensures client records stay up-to-date, especially if they move, change contact details, or provide special instructions.",
        image:
          "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "client/updateclient",
      },
      {
        title: " View Client Details",
        description:
          "Helps you understand the client’s purchase habits, loyalty, and preferences—perfect for offering customized services or promotions.",
        image:
          "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "client/viewclient",
      },
      {
        title: "Add Appointment from Client Page",
        description:
          "Saves time! No need to search the client again when booking—it’s all linked and ready to go.",
        image:
          "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "client/addappoint",
      },
      {
        title: " Add Sale from Client Page",
        description:
          "Track wallet balances, issue store credits, and manage client loyalty rewards or points directly from their profile.",
        image:
          "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "client/addsale",
      },
      {
        title: "Block clients",
        description:
          "Helps you handle misuse, no-shows, or policy violations. Maintain control over who can access your services.",
        image:
          "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "client/blockclient",
      },
      {
        title: "Unblock clients",
        description:
          "Offers flexibility. You can easily re-enable clients without losing their history or records.",
        image:
          "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "client/unblockclient",
      },
    ],
  },
];

export default function ClientsPage(): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const topicRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      topicRefs.current.forEach((ref, index) => {
        if (
          ref &&
          ref.offsetTop - 100 <= scrollPosition &&
          ref.offsetTop + ref.offsetHeight > scrollPosition
        ) {
          document
            .querySelectorAll(".sidebar-item")
            .forEach((el) => el.classList.remove("text-black", "font-semibold"));
          const current = document.getElementById(`sidebar-${index}`);
          current?.classList.add("text-black", "font-semibold");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopic = (index: number) => {
    topicRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b shadow-sm bg-white w-full">
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-6" />
          <span className="font-semibold text-lg text-black">Help Center</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="/main" className="text-sm font-medium text-black">
            Home
          </a>
          <a
            href="/main"
            className="text-sm font-medium text-black border-b-2 border-black"
          >
            Info dock
          </a>
          <a href="#" className="text-sm font-medium text-black">
            Academy
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <div className="relative hidden md:flex items-center border rounded px-2">
            <Search className="h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search our help center"
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-64"
            />
          </div>
          <Menu
            className="md:hidden w-6 h-6 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      </header>

      {/* Page Content */}
      <main className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-12 lg:px-32 xl:px-48 ">
        <img src="/assets/clientt.png" alt="Client GIF" />
        <h1 className="text-3xl font-bold mb-2 text-black">Clients</h1>
        <p className="text-gray-600 mb-8 max-w-full">
          Keep track of your client details, appointment history, preferences,
          and communication all in one place. Whether you're adding new clients,
          updating existing profiles, or reviewing visit records, daSalon makes
          client management simple and organized.
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Sidebar */}
          <aside className="md:w-1/4 w-full bg-white border rounded-xl shadow-sm p-4 h-fit md:h-[calc(100vh-6rem)] sticky top-24 overflow-y-auto">
            <ul className="space-y-2">
              {helpTopics.map((topic, index) => (
                <li
                  key={topic.category}
                  id={`sidebar-${index}`}
                  className="sidebar-item text-sm font-medium text-gray-700 hover:text-black cursor-pointer"
                  onClick={() => scrollToTopic(index)}
                >
                  {topic.category}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <section className="flex-1 space-y-16">
            {helpTopics.map((topic, index) => (
              <div
                key={topic.category}
                ref={(el) => {
                  topicRefs.current[index] = el;
                }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  {topic.category}
                </h2>
                <div className="flex flex-col gap-6">
                  {topic.items.length > 0 ? (
                    topic.items.map((item, idx) => (
                      <Link href={item.Link} key={idx}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                          <CardContent className="flex items-start gap-4 p-4">
                            {/*<img
                              src={item.image}
                              alt={item.title}
                              className="w-24 h-16 rounded-md object-cover border"
                            />*/}
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No content available.</p>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[250px]">
          <div className="p-4 space-y-4">
            <div className="font-bold text-lg">Help Center</div>
            <ul className="space-y-2">
              {helpTopics.map((topic, index) => (
                <li
                  key={topic.category}
                  className="text-sm font-medium text-gray-700 hover:text-black cursor-pointer"
                  onClick={() => {
                    scrollToTopic(index);
                    setOpen(false);
                  }}
                >
                  {topic.category}
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
