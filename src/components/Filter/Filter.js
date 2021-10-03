import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { FilterTaskAction } from "../../redux/actions/toDoActions";
import { useDispatch } from "react-redux";

export default function BasicSelect({ filter }) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(FilterTaskAction(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={filter}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="done">Done</MenuItem>
          <MenuItem value="undone">Undone</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
