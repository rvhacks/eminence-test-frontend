import { Divider, FormControl, IconButton, OutlinedInput } from "@mui/material";
import "./TextField.css";
export default function index({
  type,
  icon,
  value,
  name,
  placeholder,
  onChange,
  endAdornment,
  defaultValue,
  onKeyPress,
  onPaste,
}) {
  return (
    <FormControl fullWidth>
      <OutlinedInput
        value={value}
        endAdornment={endAdornment}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        icon={icon}
        defaultValue={defaultValue}
        variant="outlined"
        fullWidth
        onKeyPress={onKeyPress}
        onPaste={onPaste}
      />
    </FormControl>
  );
}
