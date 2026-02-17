import Image from "next/image";

export const BannerCard = () => {
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
