/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";
import { useState} from "react";
import { usePathname, useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TablePagination = ({ currentPage, totalPage,onPageChange }: { currentPage?:number, totalPage: number,onPageChange?:any}) => {
  const [currentPages, setCurrentPages] = useState(1);
  //   console.log(currentPages);
  const router = useRouter();
  const pathname = usePathname();

  const handlePrev = () => {
    if (currentPages > 1) {
      setCurrentPages(currentPages - 1);
      router.push(`${pathname}?page=${currentPages - 1}`);
    }
  };

  const handleNext = () => {
    if (currentPages < totalPage) {
      setCurrentPages(currentPages + 1);
      router.push(`${pathname}?page=${currentPages + 1}`);
    }
  };

  return (
    <div className="flex items-center gap-2 my-5">
      <Button
        onClick={handlePrev}
        disabled={currentPages === 1}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ArrowLeft />
      </Button>
      {[...Array(totalPage)].map((_, index) => (
        <Button
          onClick={() => {
            setCurrentPages(index + 1);
            router.push(`${pathname}?page=${index + 1}`);
          }}
          key={index}
          variant={currentPages === index + 1 ? "default" : "outline"}
          size="sm"
          className="w-8 h-8 rounded-full flex items-center justify-center"
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={handleNext}
        disabled={currentPages === totalPage}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TablePagination;
