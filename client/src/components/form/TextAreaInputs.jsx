/* eslint-disable no-undef */
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";


const TextAreaInputs = ( { register,name,placeholder } ) => {
  return (
    <div>
      <Label htmlFor={name} className="capitalize">{name}</Label>
      <Textarea {...register(name)} placeholder={placeholder} />
    </div>
  )
}

export default TextAreaInputs