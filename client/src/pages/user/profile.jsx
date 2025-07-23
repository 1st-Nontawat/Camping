import { useForm } from "react-hook-form";
import FormInputs from "@/components/form/FormInputs";
import Buttons from "@/components/form/Buttons";
import axios from "axios";
import { profileSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@clerk/clerk-react";

const Profile = () => {
  const { getToken } = useAuth();

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(profileSchema),
  });
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data) => {
    const token = await getToken();
    console.log("Token:", token);
    console.log("Data:", data);
    
    
    try {
      const response = await axios.post("http://localhost:5000/api/profile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">Create Profile</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name="firstname"
              type="text"
              placeholder="Input your first name"
              errors={errors}
            />
            <FormInputs
              register={register}
              name="lastname"
              type="text"
              placeholder="Input your last name"
              errors={errors}
            />
            <Buttons
              text="Create Profile"
              isPending={isSubmitting}
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;