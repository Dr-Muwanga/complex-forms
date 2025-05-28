import type { FieldArrayWithId, UseFormReturn } from "react-hook-form"
import { CustomFormField } from "../customs"

type StepProps = {
    form: UseFormReturn<any>
    fields: FieldArrayWithId<
        {
            medications: {
                name: string
                purpose: string
                dosage: string
                frequency: string
            }[]
        },
        "medications",
        "id"
    >[]
}

const fieldNames = ["name", "purpose", "dosage", "frequency"]
const CustomTableInput = ({ form, fields }: StepProps) => {
    return (
        <div className="relative space-y-1.5 overflow-x-auto">
            <h1 className="font-bold text-black">Current Medication</h1>
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
                        <tr key={field.id} className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                            <th
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                                {index + 1}
                            </th>
                            {fieldNames.map(fieldName => (
                                <td key={fieldName} className="p-1">
                                    <CustomFormField
                                        name={`medications.${index}.${fieldName}`}
                                        control={form.control}
                                        label=""
                                        placeholder={`${fieldName}`}
                                        type="text"
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomTableInput
