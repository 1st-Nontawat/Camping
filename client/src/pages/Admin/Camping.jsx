import { useForm } from "react-hook-form";
import FormInputs from "@/components/form/FormInputs";
import TextAreaInputs from "@/components/form/TextAreaInputs";

const Camping = () => {
  const { register, handleSubmit } = useForm();

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
            />
            <FormInputs
              register={register}
              name="price"
              type="number"
              placeholder="Input your price"
            />
            <TextAreaInputs
              register={register}
              name="description"
              type="text"
              placeholder="Input your description"
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
