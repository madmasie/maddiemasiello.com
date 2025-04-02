'use client';
import Grid, { GridSize } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  Breakpoint,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import ProjectDialog from './ProjectDialog';
import { ReactNode, useState } from 'react';

interface CarouselImage {
  imageUrl: string;
  caption: string;
}

interface Asset {
  icon: React.ReactNode;
  title: string;
  url: string;
}

interface ProjectDetails {
  carouselImages?: CarouselImage[];
  assets?: Asset[];
  ytVideoId?: string;
}

export interface ProjectEntry {
  image: string;
  title: string;
  description: ReactNode;
  details: ProjectDetails;
}

interface ProjectInfoProps {
  entries: ProjectEntry[];
}

function trimString(str: string, maxLen: number) {
  return str.length > maxLen - 3 ? str.slice(0, maxLen).trim() + '...' : str;
}

type ResponsiveStyleValue<T> =
  | T
  | Array<T | null>
  | {
      [key in Breakpoint]?: T | null;
    };

export default function ProjectInfo({ entries }: ProjectInfoProps) {
  const [open, setOpen] = useState<string | null>(null);

  const sizes: ResponsiveStyleValue<GridSize> = {
    xs: 12,
  };
  if (entries.length > 1) sizes['md'] = 6;
  if (entries.length > 2) sizes['xl'] = 4;

  return (
    <Grid container spacing={2} columns={12}>
      {entries.map((entry) => (
        <Grid key={entry.title} size={sizes}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              alt={`Image for ${entry.title}`}
              image={entry.image}
              height={250}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {entry.title}
              </Typography>
              <Typography
                variant="body2"
                component="span"
                color="text.secondary"
                gutterBottom
              >
                {entry.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{ marginLeft: 'auto' }}
                onClick={() => setOpen(entry.title)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
          <ProjectDialog
            entry={entry}
            open={open == entry.title}
            setOpen={setOpen}
          />
        </Grid>
      ))}
    </Grid>
  );
}
