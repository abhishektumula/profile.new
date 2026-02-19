import Image from "next/image";

type BannerCardProps = {
  title?: string;
  description?: string;
};

export const BannerCard = ({ title, description }: BannerCardProps) => {
  if (title || description) {
    return (
      <div className="w-full px-4 pt-6 sm:px-6 sm:pt-8">
        <div className="w-full rounded-xl border border-neutral-200/80 bg-white/80 p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/70">
          {title ? (
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {title}
            </h1>
          ) : null}
          {description ? (
            <p className="pt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-32 w-full items-center justify-start px-4 pt-6 sm:h-40 sm:px-6 sm:pt-8">
      <Image
        src="/profile.png"
        alt="avatar-image"
        width={112}
        height={112}
        className="h-20 w-20 rounded-full border-3  border-neutral-700 object-cover dark:border-neutral-300 sm:h-28 sm:w-28"
      />
    </div>
  );
};
