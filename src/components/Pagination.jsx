import { Box, Button } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function Pagination({ page, changePage, total, limit, changeLimit }) {
  const prev = (
    <Button
      size={"sm"}
      color="blue"
      variant={"outline"}
      disabled={page === 1}
      onClick={() => changePage(page - 1)}
    >
      <IoIosArrowBack />
    </Button>
  );
  const next = (
    <Button
      size={"sm"}
      color="blue"
      variant={"outline"}
      disabled={page === total}
      onClick={() => changePage(page + 1)}
    >
      <IoIosArrowForward />
    </Button>
  );
  const pages = new Array(total).fill(0).map((a, i) => (
    <Button
      size={"sm"}
      key={i}
      color="blue"
      variant={"outline"}
      onClick={() => changePage(i + 1)}
      disabled={page === i + 1}
    >
      {i + 1}
    </Button>
  ));
  return (
    <Box display="flex" gap={1} p={2}>
      {prev}
      {pages}
      {next}
    </Box>
  );
}
export default Pagination;
