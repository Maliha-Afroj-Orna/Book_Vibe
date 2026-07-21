import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-3xl bg-white shadow-xl border border-slate-200 p-10 text-center">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-10 w-10 text-red-600" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold text-slate-900">Oops!</h1>

        <p className="mt-2 text-lg font-medium text-slate-700">
          Something went wrong
        </p>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-500">
          We encountered an unexpected error while loading this page. Please try
          again or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => window.location.reload()}
            className="flex-1 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Try Again
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
