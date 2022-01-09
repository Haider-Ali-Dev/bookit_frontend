import { CardActions, Card, Typography, CardContent } from "@mui/material"
import './Bookmark.css'
const Bookmark = ({ bookmark_name, bookmark_url, date, index }) => {
    return (
        <Card style={{backgroundColor: "black", color: "white"}} className="card" key={index} sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography variant="h5">
                <a className="link" href={bookmark_url}>{bookmark_name}</a>
            </Typography>
            <Typography >
                Raw Link: <a className="link underline" href={bookmark_url}>
                    {bookmark_url}
                </a>
            </Typography>
            <Typography className="date" sx={{ mb: 1.5 }} >
                {date}
            </Typography>
        </CardContent>

        </Card>
    )
}

export default Bookmark