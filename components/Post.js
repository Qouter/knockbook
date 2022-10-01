import Image from "next/image";

export default function Post({
  title,
  authorName,
  body,
  publicationDate,
  authorImage,
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-9/12 p-5 bg-white border shadow-md rounded-xl">
          <div className="flex items-center justify-between w-full pb-3 border-b">
            <div className="flex items-center space-x-3">
              <div className={"h-12 w-12 rounded-full bg-slate-400"}>
                <Image
                  src={authorImage}
                  width={100}
                  height={100}
                  alt="Playlist"
                />
              </div>
              <div className="text-lg font-bold text-slate-700">
                {authorName}
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-xs text-neutral-500">{publicationDate}</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold">{title}</div>
            <div className="text-sm text-neutral-600">{body}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
