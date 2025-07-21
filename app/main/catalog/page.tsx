"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

// Types
interface HelpItem {
  title: string;
  description: string;
  Link: string;
}

interface HelpTopic {
  category: string;
  items: HelpItem[];
}

// Data
const helpTopics: HelpTopic[] = [
  {
    category: "Service",
    items: [
      {
        title: "Create a New Service",
        description:
          "Allows salons to flexibly add services for different needs and client types. Makes your offerings dynamic and easy to manage.",
        
        Link: "catalog/createservice",
      },
      {
        title: "Edit Service",
        description:
          "Keeps your service list up-to-date with changes in staff, pricing, or trends.",
       
        Link: "catalog/editservice",
      },
      {
        title: "View Service Details",
        description:
          "Gives you a complete snapshot of how each service is set up.",
        
        Link: "catalog/viewservice",
      },
      {
        title: "Delete services",
        description:
          "Easily remove outdated or discontinued services from your menu while keeping your offerings fresh and relevant.",
        
        Link: "catalog/deleteservice",
      },
    ],
  },
  {
    category: "Book a look",
    items: [
      {
        title: "Create a Book a Look",
        description:
          "Great for marketing and helps clients feel inspired when choosing services. A visual approach to booking.",
       
        Link: "catalog/createbookalook",
      },
      {
        title: "Edit Book a Look",
        description:
          "Keeps your style gallery fresh and relevant.",
       
        Link: "catalog/editbookalook",
      },
      {
        title: "View Book a Look",
        description:
          " Know which styles are trending and who’s providing them.",
       
        Link: "catalog/viewbookalook",
      },
      {
        title: "Delete Book a Lookk",
        description:
          " Remove old or less popular looks to maintain a clean and updated catalog. ",
        
        Link: "catalog/deletebookalook",
      },
    ],
  },
  {
    category: "Packages",
    items: [
      {
        title: "Create a Package",
        description:
          "Clients get more value. You earn more per visit.",
        
        Link: "catalog/createpackage",
      },
      {
        title: "Edit Package",
        description:
          "Keep up with seasonal offers or staff changes.",
        
        Link: "catalog/editpackage",
      },
      {
        title: "View Package Details",
        description:
          "Helps you track which packages are popular and who handles them.",
        
        Link: "catalog/viewpackage",
      },
      {
        title: "Delete Package",
        description:
          "Remove outdated or unused packages.",
        
        Link: "catalog/deletepackage",
      },
    ],
  },
  {
    category: "Products",
    items: [
      {
        title: "Create a Product",
        description:
          "Build a product catalog that works for both in-store and online selling.",
        
        Link: "catalog/createproduct",
      },
      {
        title: "Edit Product",
        description:
          " Adjust for new stock, pricing updates, or changes in availability.",
        
        Link: "catalog/editproduct",
      },
      {
        title: "View Product Details",
        description:
          " Helps you track inventory and sales performance in real-time.",
        
        Link: "catalog/viewproduct",
      },
      {
        title: "Delete Product",
        description:
          "Remove outdated product.",
        
        Link: "catalog/deleteproduct",
      },
    ],
  },
];

export default function ServicesPage() {
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
            .forEach((el) =>
              el.classList.remove("text-black", "font-semibold")
            );
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
          <a href="/main" className="text-sm font-medium text-black">Home</a>
          <a href="/main" className="text-sm font-medium text-black border-b-2 border-black">Info dock</a>
          <a href="#" className="text-sm font-medium text-black">Academy</a>
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
        <img src="/assets/service.gif" alt="Service illustration" />
        <h1 className="text-3xl font-bold mb-2 text-black">Services</h1>
        <p className="text-gray-600 mb-8 max-w-full">
          Effortlessly organize and customize the services you offer with daSalon. From setting prices and durations to assigning team members and categories, manage all your salon services in one place.
          Keep your menu clear, up to date, and tailored to your business needs.
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
                ref={(el) => {topicRefs.current[index] = el}}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{topic.category}</h2>
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
                              <p className="text-sm text-gray-600">{item.description}</p>
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
