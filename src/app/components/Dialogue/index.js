import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ReactComponent as CloseSvg } from "../../../assets/images/close.svg";

function CustomDialog({
  isOpen,
  handleClose,
  header,
  bodyChild,
  mainClass,
  isClose,
  header_style,
  fullScreen,
}) {
  return (
    <div className={mainClass ?? ""}>
      <Dialog
        open={isOpen}
        fullScreen={fullScreen}
        onClose={handleClose}
        disableScrollLock={true}
        className={mainClass ?? ""}
      >
        <DialogTitle className={header_style}>
          {header}
          {isClose && (
            <CloseSvg
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "13px",
                right: "13px",
                cursor: "pointer",
              }}
            />
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ overflowWrap: "anywhere" }}>
            {bodyChild}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default React.memo(CustomDialog);
