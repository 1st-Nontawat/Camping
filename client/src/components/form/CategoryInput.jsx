import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { categories } from "@/lib/categories"


const CategoryInput = ({ name, register, setValue }) => {
    return (
        <div className="mb-2">
            <input type="hidden" {...register(name)} />



            <label className="capitalize">{name}</label>
            <Select 
                onValueChange={(value) => setValue(name, value)} 
            required> 
                <SelectTrigger >
                    <SelectValue placeholder="Please select a category" />
                </SelectTrigger>
                <SelectContent>
                    {categories.map((Item) => {
                        return <SelectItem
                            key={Item.label}
                            value={Item.label}
                        >
                            <span className="flex items-center gap-4">
                                <Item.icon />
                                <p className="capitalize">{Item.label}</p>
                            </span>
                        </SelectItem>
                    })}
                </SelectContent>
            </Select>
        </div>
    )
}

export default CategoryInput