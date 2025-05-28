import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import type { Control } from "react-hook-form"

type RadioProps = {
    name: string
    label: string
    control: Control<any>
    options: string[]
}
const CustomOption = ({ name, control, label, options }: RadioProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <div className="flex w-full justify-between gap-5">
                            {options.map(option => (
                                <div className="flex items-center gap-1" key={option}>
                                    <button
                                        type="button"
                                        className={cn(
                                            "rounded-full bg-white p-2 shadow-sm ring-1 ring-inset ring-sky-300 focus:outline-offset-0",
                                            field.value === option ? "bg-blue-500" : "bg-gray-100 hover:bg-gray-500",
                                        )}
                                        onClick={() => field.onChange(option)}
                                        value={option}
                                    ></button>
                                    <span className="text-sm font-medium text-gray-900">
                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomOption
