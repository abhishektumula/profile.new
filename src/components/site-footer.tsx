export const SiteFooter = () => {
  return (
    <footer className="w-full bg-white pt-10 dark:bg-black">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <div className="w-full border-t border-neutral-200/60 pt-3 dark:border-neutral-900">
          <p className="pb-2 text-sm text-neutral-500 dark:text-neutral-400">
            built by ❤️
          </p>
          <p className="select-none text-[clamp(3.5rem,14vw,8.5rem)] font-semibold leading-none tracking-tight text-neutral-300/35 [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%),linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-composite:source-in] dark:text-neutral-700/40">
            ABHISHEK
          </p>
        </div>
      </div>
    </footer>
  );
};
