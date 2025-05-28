import type { Control } from "react-hook-form"
import { FormField, FormLabel, FormItem, FormControl, FormMessage } from "../ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

type Item = {
    id: number
    name: string
}
type CustomFormSelectProps = {
    name: string
    placeholder: string
    control: Control<any>
    items: Item[]
    labelText?: string
}

const CustomSelectForm = ({ name, control, items, labelText, placeholder }: CustomFormSelectProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="w-full">
                    <FormLabel className="text-black dark:text-white">{labelText || name}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="w-full min-w-48 rounded border border-solid border-gray-500 bg-transparent py-0 placeholder:text-gray-100">
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-md bg-card text-sm">
                            {items.map(item => {
                                return (
                                    <SelectItem
                                        key={item.id}
                                        value={item.name}
                                        className="cursor-pointer hover:text-white focus:bg-teal-500"
                                    >
                                        {item.name}
                                    </SelectItem>
                                )
                            })}
                        </SelectContent>
                    </Select>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomSelectForm
