import { Box, Button } from "@chakra-ui/react";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
function Pagination({ current, onChange, total }) {
    const prev = (
      <Button  size={"sm"} color="blue"  variant={"outline"} disabled={current === 1} onClick={() => onChange(current - 1)}>
        <IoIosArrowBack/>
      </Button>
    );
    const next = (
      <Button size={"sm"} color="blue"  variant={"outline"}  disabled={current === total} onClick={() => onChange(current + 1)}>
        <IoIosArrowForward/>
      </Button>
    );
    const pages = new Array(total).fill(0).map((a, i) => (
      <Button size={"sm"} key={i} color="blue"  variant={"outline"} onClick={() => onChange(i + 1)} disabled={current === i + 1}>
        {i + 1}
      </Button>
    ));
    return (
      <Box display="flex" gap={1}  p={2}>
        {prev}
        {pages}
        {next}
      </Box>
    );
  }
  export default Pagination;
  