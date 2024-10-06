import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent, CardHeader, Chip } from "@mui/material";
import { Box } from "@mui/material";

export interface ExperienceEntry {
  entity: string;
  entityLogo?: string;
  location: string;
  title: string;
  date: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
}

interface ExperienceInfoProps {
  entries: ExperienceEntry[];
}

export default function ExperienceInfo({ entries }: ExperienceInfoProps) {
  return (
    <Grid container spacing={2}>
      {entries.map((entry) => (
        <Grid key={entry.entity + entry.title + entry.date} size={{ xs: 12 }}>
          <Card variant="outlined">
            <CardHeader
              sx={{ pb: 0 }}
              avatar={
                entry.entityLogo && (
                  <Avatar
                    alt={`Logo for ${entry.entity}`}
                    src={entry.entityLogo}
                  />
                )
              }
              title={entry.entity}
              subheader={
                <>
                  <Typography variant="subtitle2">
                    {entry.title} ({entry.date})
                  </Typography>
                  <Typography variant="caption">{entry.location}</Typography>
                </>
              }
            />
            <CardContent>
              {entry.description && (
                <Typography>{entry.description}</Typography>
              )}
              {entry.bullets && entry.bullets.length > 0 && (
                <ul>
                  {entry.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
              {entry.tags && entry.tags.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap", // Allows chips to wrap to the next row
                    gap: 1, // Adds some space between the chips
                  }}
                >
                  {entry.tags.map((tag) => (
                    <Chip variant="outlined" label={tag} key={tag} />
                  ))}
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
