import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setBookmarkList } from "../state/bookmarkListSlice"
import { Button, Card, CardContent } from '@mui/material'
import { Typography } from "@mui/material"
import './BookmarkList.css'
import { CardActions } from "@mui/material"
import Bookmark from "../Bookmark/Bookmark"
export default function BookmarkList() {
    const user = useSelector((state) => state.userData)
    const [bookmarks, setBookmarks] = useState([])
    useEffect(() => {
        const fetchBookmarks = async () => {
            const data = await fetch("https://api.bookit.haider-ali.xyz/bookmark-list",
            {
                method: "POST",
                body: JSON.stringify({
                    email: user.email
                })
            })
            const bookmark = await data.json()
            setBookmarks(bookmark)
    }
    fetchBookmarks()
    }, [])
    return (
        <div>
            <div className="card-main">
                <div className="card-main-child">
                    {bookmarks ? 
                    bookmarks.map((bookmark, index) => <Bookmark 
                    bookmark_name={bookmark.bookmark_name }
                    bookmark_url={bookmark.bookmark_url}
                    date={bookmark.date}
                    index={index}
                    /> ): <h1>Load</h1>}
                </div>
            </div>
        </div>
    )
}