
interface PostItems {
  title: string;
  writer: string;
}

export default function PostItem({ title, writer }: PostItems) {
  return (
    <div className="flex justify-between items-center text-white pb-2 mb-2 cursor-pointer border-b-2 border-gray-400">  
        <span>{title}</span>
        <span>{writer}</span>
      </div>
  );
}
