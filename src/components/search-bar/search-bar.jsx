import { IconButton, Paper } from "@mui/material";
import { colors } from "../../constants/colors";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate() 

  const submitHandler = (e) => {
    e.preventDefault();
    if(value) {
      navigate(`/search/${value}`)
    }
  };

  return (
    <Paper
      component="form" // Corrected from "from" to "form"
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
        mr: 5,
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
