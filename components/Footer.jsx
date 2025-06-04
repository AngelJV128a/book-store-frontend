export default function Footer() {
  return (
    <footer className="bg-gray-50 p-6 text-center text-sm text-gray-500">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Book Store. All rights reserved.
      </p>
      <p className="mb-4">
        Made with{" "}
        <span className="text-red-500">❤</span> by{" "}
          Angel Jair Vazquez Bernal
      </p>
    </footer>
  );
}