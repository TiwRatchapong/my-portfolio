export default function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-800 py-20">
      <div className="container-custom flex justify-center">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Ratchapong Thongwiang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}