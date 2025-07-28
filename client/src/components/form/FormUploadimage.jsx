import { resizeFile } from "@/utils/resizeimage"; 
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAuth } from "@clerk/clerk-react";
import { uploadImage } from "@/api/uploadfile";

const FormUploadImage = () => {

    const { getToken } = useAuth();

    const hdlOnChange = async (e) => {
    const token = await getToken();

        const file = e.target.files[0];
        if (!file) return;
   
    try {
        const resizedImage = await resizeFile(file);
        const res = await uploadImage(resizedImage, token);     
        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
    };

    return (
        <div>
            <Label>Upload Image</Label>
            <div >
                <Input type="file" onChange={hdlOnChange} />
            </div>
        </div>
    );
}

export default FormUploadImage;
