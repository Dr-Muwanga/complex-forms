import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import type { Control } from "react-hook-form"
import { Input } from "@/components/ui/input"

type CustomFormFieldProps = {
    label: string
    name: string
    placeholder: string
    type: string
    control: Control<any>
}

const CustomFormField = ({ name, control, placeholder, type, label }: CustomFormFieldProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="w-full">
                    <FormLabel className="text-black dark:text-white">{label}</FormLabel>
                    <FormControl>
                        <Input
                            {...field}
                            type={type}
                            placeholder={placeholder}
                            autoComplete="on"
                            ref={field.ref}
                            className="w-full rounded border border-solid border-gray-500 bg-transparent py-0 placeholder:font-normal placeholder:text-gray-500 dark:placeholder:text-gray-200"
                            min={type === "number" ? 0 : 0}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
export default CustomFormField
