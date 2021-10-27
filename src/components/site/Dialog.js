import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import media0 from '../../assets/img/media0.png'
import media1 from '../../assets/img/media1.png'
import media2 from '../../assets/img/media2.png'
import media3 from '../../assets/img/media3.png'
import media4 from '../../assets/img/media4.png'

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary"
        onClick={handleClickToOpen}>
        Tutorial For Youtube Live Event
      </Button>
      <Dialog 
      open={open} 
      onClose={handleToClose} 
      fullWidth
      maxWidth
      style={{textAlign:'center'}}>
        <DialogContent>
          <DialogContentText style={{fontSize:'30px', margin:'20px 0px', fontWeight:'bold'}}>Step 1: Enable "Allow embedding" checbox.</DialogContentText>
          <img src={media0} alt="step1" width="50%" height="auto" style={{textAlign:'center'}}></img>
          <DialogContentText style={{fontSize:'30px', margin:'20px 0px', fontWeight:'bold'}}>Step 2: Click "Share" button.</DialogContentText>
          <img src={media1} alt="step2" width="50%" height="auto"></img>
          <DialogContentText style={{fontSize:'30px', margin:'20px 0px', fontWeight:'bold'}}>Step 3: Click "Embed" icon.</DialogContentText>
          <img src={media2} alt="step3" width="50%" height="auto"></img>
          <DialogContentText style={{fontSize:'30px', margin:'20px 0px', fontWeight:'bold'}}>Step 4: Copy URL.</DialogContentText>
          <img src={media3} alt="step4" width="50%" height="auto"></img>
          <DialogContentText style={{fontSize:'30px', margin:'20px 0px', fontWeight:'bold'}}>Step 5: Paste here, then submit the form.</DialogContentText>
          <img src={media4} alt="step5" width="50%" height="auto"></img>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose}
            color="primary" autoFocus style={{fontSize:'20px'}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
