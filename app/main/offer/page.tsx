"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

type HelpItem = {
  title: string;
  description: string;
  Link: string;
};

type HelpTopic = {
  category: string;
  items: HelpItem[];
};

const helpTopics: HelpTopic[] = [
  {
    category: "Voucher",
    items: [
      {
        title: "Create Voucher",
        description:
          "Promotes prepaid bookings and encourages multiple visits. It builds loyalty and guarantees future business.",
        
        Link: "offer/createvoucher",
      },
      {
        title: "Edit Voucher",
        description:
          "Keep vouchers aligned with changing offerings or new pricing strategies.",
        
        Link: "offer/editvoucher",
      },
      {
        title: "View Voucher Details",
        description:
          "Track performance and client behavior to see what works best.",
        
        Link: "offer/viewvoucher",
      },
      {
        title: "Delete Voucher",
        description:
          " Remove outdated offers to maintain a clean catalog.",
        
        Link: "offer/deletevoucher",
      },
    ],
  },
  {
    category: "Membership",
    items: [
      {
        title: "Create memberships",
        description:
          " Offers elite experience to your loyal clients and creates consistent recurring revenue for your salon.",
        
        Link: "offer/createmembership",
      },
      {
        title: "Edit Membership",
        description:
          "Tailor your memberships to evolving business goals or special promotions.",
        
        Link: "offer/editmembership",
      },
      {
        title: "View Membership Details",
        description:
          "Monitor how each membership is structured and where it's available.",
        
        Link: "offer/viewmembership",
      },
      {
        title: "Delete Membership",
        description:
          "Clean up expired or outdated membership options.",
        
        Link: "offer/deletemembership",
      },
    ],
  },
  {
    category: "Promo Code",
    items: [
      {
        title: "Create PromoCode",
        description:
          "Drives quick decisions and increases urgency to book. Easy to share via SMS or email campaigns.",
        
        Link: "offer/createpromocode",
      },
      {
        title: "Edit PromoCode",
        description:
          "Quickly adjust dates, codes, or service scope based on campaign results.",
        
        Link: "offer/editpromocode",
      },
      {
        title: "View PromoCode Details",
        description:
          "Helps understand promo performance and track redemption trends.",
        
        Link: "offer/viewpromocode",
      },
      {
        title: "Delete PromoCode",
        description:
          "Keep only valid and live codes to avoid confusion.",
        
        Link: "offer/deletepromocode",
      },
    ],
  },
  {
    category: "Gift cards",
    items: [
      {
        title: "Create a Gift Card",
        description:
          "To design and launch a new gift card that can be sold to clients either online or in-store. This helps in boosting sales, offering gifting options, and increasing brand engagement.",
        
        Link: "offer/creategiftcard",
      },
      {
        title: "Edit Gift Card",
        description:
          "To update existing gift card details such as pricing, description, or venue availability. This is useful when offering promotions, correcting information, or adjusting to business changes.",
        
        Link: "offer/editgiftcard",
      },
      {
        title: "View Gift Card Details",
        description:
          "To review complete gift card information including pricing, availability, and usage history by clients. This helps salon partners monitor sales performance and manage client queries.",
        
        Link: "offer/viewgiftcard",
      },
      {
        title: " Delete Gift Card",
        description:
          "To remove outdated, incorrect, or discontinued gift cards from the offers list. This keeps the catalog clean and avoids client confusion.",
        
        Link: "offer/deletegiftcard",
      },
    ],
  },
];

export default function MembershipPage() {
  const [open, setOpen] = useState(false);
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
          <Menu className="md:hidden w-6 h-6 cursor-pointer" onClick={() => setOpen(true)} />
        </div>
      </header>

      {/* Page Content */}
      <main className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-12 lg:px-32 xl:px-48">
        <img src="/assets/offerpromote.png" alt="Gift Cards" />
        <h1 className="text-3xl font-bold mb-2 text-black">Membership</h1>
        <p className="text-gray-600 mb-8 max-w-full">
          Build client loyalty and increase recurring revenue with customizable membership packages.
          Offer exclusive benefits, manage member details, and track usage seamlessly—daSalon makes
          it easy to deliver value while keeping memberships organized and accessible.
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
