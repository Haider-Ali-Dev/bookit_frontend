import { useEffect, useState } from "react"
import BookmarkList from "../BookmarkList/BookmarkList"
import { setBookmarkList } from "../state/bookmarkListSlice"
import { useDispatch, useSelector } from "react-redux"
import { Input, Modal } from "@mui/material"
import { Button } from "@mui/material"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import './Home.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 200,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

export default function Home() {

    const user = useSelector((state) => state.userData)

    const [modal, setModal] = useState(false);
    const handleOpen = () => setModal(true);
    const [modalBookmarkName, setModalBookmarkName] = useState("");
    const [modalBookmarkUrl, setModalBookmarkUrl] = useState("");


    const onSubmitBookmark = async () => {
        const data = await fetch("http://localhost:8000/bookmark-add", {
            method: "POST",
            body: JSON.stringify({
                bookmark_name: modalBookmarkName,
                bookmark_url: modalBookmarkUrl,
                email: user.email
            })
        })
        const isBookmarkSubmited = await data.json();
        setModal(false)
    }
    return (
        <div>

            <Modal

            open={modal}
            onClose={() => setModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
             >
                <Box sx={style}>
                    <Typography className="text-center" id="modal-modal-title" variant="h5" component="h2">
                       Add a new Bookmark
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                       <div  className="modal-main">
                           <div className="modal-main-child">
                               <div>
                                    <Input onChange={(e) => setModalBookmarkName(e.target.value)} variant="outlined" placeholder="Bookmark Name" />
                               </div>
                               <div>
                                    <Input onChange={(e) => setModalBookmarkUrl(e.target.value)} variant="outlined" placeholder="Bookmark Url" />
                               </div>
                               <div>
                                   <Button onClick={onSubmitBookmark}>Submit Bookmark</Button>
                               </div>
                           </div>
                       </div>
                    </Typography>
                </Box>
            </Modal>
            <h1 className="text-center">{user.name}'s Bookmarks</h1>
            <div className="open-modal-btn">
                <Button color="primary" variant="contained" onClick={handleOpen}>New Bookmark</Button>
            </div>
            <div>
                <BookmarkList/>
            </div>
        </div>
    )
}