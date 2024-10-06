import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";

interface CarouselProps {
  elements: React.ReactElement[];
}

export default function Carousel({ elements }: CarouselProps) {
  // currentPage is the current page of the elements that is currently displayed
  const [currentPage, setCurrentPage] = useState(0);
  // slideDirection is the direction that the elements will slide in
  const [slideDirection, setSlideDirection] = useState<
    "right" | "left" | undefined
  >("left");

  // these two functions handle changing the pages
  const handleNextPage = useCallback(() => {
    setSlideDirection("left");
    setCurrentPage((prevPage) =>
      prevPage !== elements.length - 1 ? prevPage + 1 : prevPage
    );
  }, [elements.length]);

  const handlePrevPage = useCallback(() => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => (prevPage !== 0 ? prevPage - 1 : prevPage));
  }, []);

  //   register the event listeners for the arrow keys
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNextPage();
      } else if (event.key === "ArrowLeft") {
        handlePrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNextPage, handlePrevPage]);

  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {elements.length > 1 && (
        <IconButton
          onClick={handlePrevPage}
          sx={{ margin: 5 }}
          disabled={currentPage === 0}
        >
          {/* this is the button that will go to the previous page you can change these icons to whatever you wish*/}
          <NavigateBeforeIcon />
        </IconButton>
      )}
      <Box>
        {elements.map((element, index) => (
          <Box
            key={`element-${index}`}
            sx={{
              display: currentPage === index ? "block" : "none",
            }}
          >
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack
                spacing={2}
                direction="row"
                alignContent="center"
                justifyContent="center"
              >
                {element}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>
      {elements.length > 1 && (
        <IconButton
          onClick={handleNextPage}
          sx={{
            margin: 5,
          }}
          disabled={currentPage >= elements.length - 1}
        >
          <NavigateNextIcon />
        </IconButton>
      )}
    </Stack>
  );
}
