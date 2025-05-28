import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form"
import CustomFormField from "./CustomFormField"
import { Trash2 } from "lucide-react"
import { Button } from "../ui/button"

type Props = {
    fieldNames: string[]
    title: string
    form: UseFormReturn<any>
    arrayName: string
    fieldArray: UseFieldArrayReturn<any, any>
}
const CustomTableInput = ({ fieldNames, form, title, fieldArray, arrayName }: Props) => {
    const { fields, remove } = fieldArray
    return (
        <div className="space-y-1.5 overflow-x-auto">
            <h1 className="font-bold text-black">{title}</h1>
            <table className="w-full rounded-md border border-gray-300 text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        {fieldNames.map(fieldName => (
                            <th key={fieldName} scope="col" className="px-6 py-3">
                                {fieldName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {fields.map((field, index) => (
                        <tr key={field.id} className="relative border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                            <th
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                                {index + 1}
                            </th>
                            {fieldNames.map(fieldName => (
                                <td key={fieldName} className="p-1">
                                    <CustomFormField
                                        name={`${arrayName}.${index}.${fieldName}`}
                                        control={form.control}
                                        label=""
                                        placeholder={`${fieldName}`}
                                        type="text"
                                    />
                                </td>
                            ))}
                            {index > 0 && (
                                <td className="absolute left-8 top-1/2 -translate-y-1/2">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => remove(index)}
                                        aria-label={`Remove ${title} ${index + 1}`}
                                    >
                                        <Trash2 className="h-4 w-4 text-red-400 hover:text-red-500" />
                                    </Button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomTableInput
