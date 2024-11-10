export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-4">The page you are looking for does not exist.</p>
        <a 
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  )
} 