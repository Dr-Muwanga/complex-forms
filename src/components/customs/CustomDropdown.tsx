import Select from "react-dropdown-select"
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import type { Control } from "react-hook-form"

type Item = {
    id: number
    name: string
}

type CustomDropDownProps = {
    name: string
    control: Control<any>
    placeholder: string
    label: string
    options: Item[]
    className?: string
}
const CustomDropdown = ({ name, control, placeholder, label, options, className }: CustomDropDownProps) => {
    const formattedOptions = options.map(option => ({
        value: option.id,
        label: option.name,
    }))

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="w-full">
                    <FormLabel className="capitalize text-black dark:text-white">{label}</FormLabel>
                    <Select
                        options={formattedOptions}
                        multi
                        separator
                        labelField="label"
                        valueField="value"
                        values={field.value || []}
                        onChange={values => field.onChange(values)}
                        placeholder={placeholder}
                        dropdownHandle
                        closeOnSelect
                        closeOnScroll
                        searchable
                        dropdownPosition="auto"
                        dropdownHeight="300px"
                        keepSelectedInList={false}
                        color="teal"
                        // clearable={true}
                        backspaceDelete
                        className={className}
                        style={{
                            width: "100%",
                            border: "solid 1px gray",
                            borderRadius: "4px",
                            color: "teal",
                            background: "transparent",
                        }}
                    />
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomDropdown
