import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextAreaInputs = ({ register, name, placeholder, errors }) => {
  return (
    <div>
      <Label htmlFor={name} className="capitalize">{name}</Label>
      <Textarea
        {...register(name)}
        placeholder={placeholder}
        className={errors && errors[name] ? "border-red-500" : ""}
        rows={4}
      />
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TextAreaInputs;
