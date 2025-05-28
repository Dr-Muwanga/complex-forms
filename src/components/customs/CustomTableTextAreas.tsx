import { Trash2 } from "lucide-react"
import React from "react"
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import CustomFormField from "./CustomFormField"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

type Props = {
    fieldNames: string[]
    title: string
    form: UseFormReturn
    arrayName: string
    fieldArray: UseFieldArrayReturn<any, "diagnostics", "id">
}

const CustomTableTextAreas: React.FC<Props> = ({ form, title, fieldArray, arrayName }) => {
    const { fields, remove } = fieldArray

    return (
        <div className="space-y-1.5 overflow-x-hidden">
            <h1 className="font-bold text-black">{title}</h1>
            <table className="w-full rounded-md border border-gray-300 text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="w-[30%] px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="w-[70%] px-6 py-3">
                            Findings
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {fields.map((field, index) => (
                        <tr
                            key={field.id}
                            className="relative items-start space-x-3 border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <td
                                scope="row"
                                className="whitespace-wrap w-[30%] px-1 py-2 font-medium text-gray-900 dark:text-white"
                            >
                                <CustomFormField
                                    control={form.control}
                                    name={`${arrayName}.${index}.name`}
                                    type="text"
                                    label=""
                                    placeholder="test name"
                                />
                            </td>
                            <td className="">
                                <div className="pr-6">
                                    <FormField
                                        control={form.control}
                                        name={`${arrayName}.${index}.finding`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Textarea
                                                        {...field}
                                                        value={field.value ?? ""}
                                                        maxLength={500}
                                                        placeholder="Enter findings here..."
                                                        autoComplete="off"
                                                        className="h-14 min-h-7 resize-none text-black placeholder:font-normal placeholder:text-gray-400"
                                                        aria-label={`findings for ${title} ${index + 1}`}
                                                    />
                                                </FormControl>
                                                <FormMessage className="!text-red" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </td>
                            {index > 1 && (
                                <td className="absolute -right-1 top-1/4">
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

export default React.memo(CustomTableTextAreas)
