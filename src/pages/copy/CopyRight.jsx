const CopyRight = () => {
  return (
    <div className="bg-paper">
      <div className="container-x flex flex-col items-center justify-between gap-3 border-t border-ink/10 py-6 text-sm text-ink/60 md:flex-row">
        <p>© {new Date().getFullYear()} Flora. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ink">Terms &amp; Conditions</a>
          <a href="#" className="hover:text-ink">Privacy Policy</a>
          <a href="#home" className="font-semibold text-ink hover:text-brand">Back to top ↑</a>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
