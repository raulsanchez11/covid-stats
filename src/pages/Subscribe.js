import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'

import { MainLayout } from 'layouts/'

export function Subscribe(props) {
  return (
    <MainLayout>
      <Card variant="outlined">
        <CardContent></CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </MainLayout>
  )
}
