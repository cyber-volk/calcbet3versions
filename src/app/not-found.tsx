import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">404 - Page Not Found</h2>
            <p className="text-gray-600 mb-4">Sorry, we couldn't find the page you're looking for.</p>
            <Link 
              href="/"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block"
            >
              Return Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
} 