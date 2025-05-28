import type { Control } from "react-hook-form"
import { FormField, FormLabel, FormItem, FormControl, FormMessage } from "../ui/form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Calendar } from "lucide-react"

type CustomDateProps = {
    name: string
    control: Control<any>
    label?: string
}

const CustomDatePicker = ({ name, control, label }: CustomDateProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                    <FormLabel className="text-black dark:text-white">{label}</FormLabel>
                    <FormControl className="">
                        <DatePicker
                            showIcon
                            icon={<Calendar />}
                            selected={field.value}
                            onSelect={date => field.onChange(date)}
                            onChange={date => field.onChange(date)}
                            showMonthDropdown
                            showYearDropdown
                            showTimeInput
                            timeFormat="HH:mm"
                            dateFormat="dd-MM-YYYY @HH:mm"
                            className="flex w-full flex-row items-center rounded border border-solid border-gray-300 bg-transparent p-1 text-black placeholder:font-normal placeholder:text-gray-300 dark:text-white"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomDatePicker
