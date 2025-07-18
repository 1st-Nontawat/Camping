import { useForm } from "react-hook-form";
import FormInputs from "@/components/form/FormInputs";
import TextAreaInputs from "@/components/form/TextAreaInputs";
import { z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const campingSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters long"),
  price: z.coerce.number(),
  description: z.string().max(50, "Description must be at most 50 characters long"),
});


const Camping = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(campingSchema),
  });
  const { errors } = formState;
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">Create Camping</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name="title"
              type="text"
              placeholder="Input your title"
              errors={errors}
            />
            <FormInputs
              register={register}
              name="price"
              type="number"
              errors={errors}
              placeholder="Input your price"
            />
            <TextAreaInputs
              register={register}
              name="description"
              type="text"
              placeholder="Input your description"
              errors={errors}
            />
          </div>
          <div className="mt-4 text-left">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Camping;
