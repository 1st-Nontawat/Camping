import { useForm } from "react-hook-form";
import FormInputs from "@/components/form/FormInputs";
import TextAreaInputs from "@/components/form/TextAreaInputs";
import { zodResolver } from "@hookform/resolvers/zod";
import Buttons from "@/components/form/Buttons";
import { campingSchema } from "@/utils/schemas";
import CategoryInput from "@/components/form/CategoryInput";
import Mainmap from "@/components/map/Mainmap.jsx";
import { useAuth } from "@clerk/clerk-react";
import { createCamping } from "@/api/camping";

const Camping = () => {
  const { getToken } = useAuth();

  const { register, handleSubmit, formState, setValue, reset } = useForm({
    resolver: zodResolver(campingSchema),
  });

  const { errors, isSubmitting } = formState;

  const onSubmit = async (data) => {
    try {
      const token = await getToken();
      console.log("Token:", token); 
      const response = await createCamping(data, token);
      console.log("Camping created successfully:", response.data);
      reset();
    } catch (error) {
      console.error("Failed to create camping:", error);
    }
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
            <CategoryInput
              name="category"
              register={register}
              setValue={setValue}
            />
            <Mainmap register={register} setValue={setValue} />
          </div>
          <div className="mt-4 text-left">
            <Buttons
              text="Create Camping"
              isPending={isSubmitting}
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Camping;