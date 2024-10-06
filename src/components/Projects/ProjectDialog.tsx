import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { ProjectEntry } from "./ProjectInfo";
import {
  Box,
  DialogContent,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Carousel from "../Carousel/Carousel";
import YouTube from "react-youtube";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ProjectDialogProps {
  entry: ProjectEntry;
  open: boolean;
  setOpen: (open: string | null) => void;
}

export default function ProjectDialog({
  entry,
  open,
  setOpen,
}: ProjectDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const assetsExist = entry.details.assets && entry.details.assets.length > 0;

  return (
    <Dialog
      onClose={() => setOpen(null)}
      open={open}
      scroll="paper"
      fullScreen={fullScreen}
      maxWidth="md"
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {entry.title}
        <IconButton onClick={() => setOpen(null)}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {entry.details.carouselImages &&
          entry.details.carouselImages.length > 0 && (
            <Carousel
              elements={entry.details.carouselImages.map((img) => (
                <Stack key={img.imageUrl}>
                  <img
                    alt={`Image for ${img.caption}`}
                    src={img.imageUrl}
                    height={300}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    variant="caption"
                    textAlign="center"
                    sx={{ mt: 2 }}
                  >
                    {img.caption}
                  </Typography>
                </Stack>
              ))}
            />
          )}
        {assetsExist &&
          entry.details.assets!.map((asset) => (
            <Stack direction="row" spacing={1} key={asset.title} sx={{ mt: 4 }}>
              {asset.icon}
              <Typography>
                <Link
                  color="textPrimary"
                  href={asset.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {asset.title}
                </Link>
              </Typography>
            </Stack>
          ))}
        <Typography sx={{ my: assetsExist ? 2 : 4 }}>
          {entry.description}
        </Typography>
        {entry.details.ytVideoId && (
          <YouTube videoId={entry.details.ytVideoId} />
        )}
      </DialogContent>
    </Dialog>
  );
}
