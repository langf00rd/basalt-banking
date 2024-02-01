import { ASIDE_LINKS } from "@/lib/constants";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Aside() {
  const router = useRouter();
  return (
    <aside className="flex-1 bg-white p-5 flex justify-between flex-col border-r space-y-[50px]">
      <h3 className="text-2xl text-primary">
        Basalt <span className="text-black">Banking</span>
      </h3>
      <ul>
        {ASIDE_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            <div
              className={`p-5 flex items-center space-x-3 ${
                router.pathname === link.href && "text-primary"
              }`}
            >
              {link.icon}
              <p>{link.label}</p>
            </div>
          </Link>
        ))}
      </ul>
      <p>Terms &amp; conditions</p>
    </aside>
  );
}
