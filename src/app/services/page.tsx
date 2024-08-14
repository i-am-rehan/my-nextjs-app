import Link from "next/link";

// src/app/services/page.tsx
const ServicesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Our Services</h1>
      <div className="mt-4">
        <Link href="/services/nested">Go to Nested Page</Link>
      </div>
    </div>
  );
};

export default ServicesPage;
