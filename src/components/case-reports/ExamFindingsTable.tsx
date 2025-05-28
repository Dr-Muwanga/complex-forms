import React from "react"
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import type { CaseReportType } from "@/lib/validation"
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form"

type Props = {
    form: UseFormReturn<CaseReportType>
    examFields: UseFieldArrayReturn<CaseReportType, "systemicExams", "id">
}

const ExamFindingsTable: React.FC<Props> = ({ form, examFields }) => {
    const { fields } = examFields

    return (
        <div className="relative space-y-1.5 overflow-x-auto">
            <h2 className="font-bold text-black">Systemic examination findings</h2>
            <table className="w-full rounded-md border border-gray-300 text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="w-[30%] px-6 py-3">
                            System
                        </th>
                        <th scope="col" className="w-[70%] px-6 py-3">
                            Examination Findings
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {fields.map((fieldSystem, index) => (
                        <tr key={fieldSystem.id} className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                            <th
                                scope="row"
                                className="whitespace-wrap w-[30%] px-1 py-2 font-medium text-gray-900 dark:text-white"
                            >
                                {fieldSystem.system}
                            </th>
                            <td className="w-[70%] p-1">
                                <FormField
                                    control={form.control}
                                    name={`systemicExams.${index}.finding`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    value={field.value ?? ""}
                                                    maxLength={500}
                                                    placeholder="Enter findings here..."
                                                    autoComplete="off"
                                                    className="h-20 resize-none text-black"
                                                    aria-label={`Examination findings for ${fieldSystem.system}`}
                                                />
                                            </FormControl>
                                            <FormMessage className="!text-red" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`systemicExams.${index}.system`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <input type="hidden" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(ExamFindingsTable)
