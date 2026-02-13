import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/UI.jsx";

export default function NotFound() {
  return (
    <Card className="p-8">
      <h1 className="text-2xl font-black">Page not found</h1>
      <p className="mt-2 text-slate-700">That route doesn’t exist.</p>
      <Link className="mt-4 inline-block font-extrabold text-sky-700 hover:text-sky-900" to="/">
        Go back home →
      </Link>
    </Card>
  );
}
