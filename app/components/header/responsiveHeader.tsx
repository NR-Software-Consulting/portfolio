import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Typography } from "@mui/material";
import { HeaderData } from "@/app/jsonData/data";

const ResponsiveHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const OpenDrawar = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuIcon onClick={OpenDrawar} />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { width: "100%", boxShadow: "none" },
        }}
      >
        {HeaderData.map((header) => {
          return (
            <>
              <MenuItem id="basic-MenuItem" onClick={handleClose}>
                <Typography>{header.name}</Typography>
              </MenuItem>
            </>
          );
        })}
      </Menu>
    </>
  );
};

export default ResponsiveHeader;
