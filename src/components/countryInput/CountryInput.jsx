import { TextField, FormControl } from ".."

export default function CountryInput() {
  return (
    <FormControl>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Nigeria"
      />
    </FormControl>
  )
}
