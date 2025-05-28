import React, { useMemo } from "react"
import type { UseFormReturn, UseFieldArrayReturn } from "react-hook-form"
import { CustomDatePicker, CustomTableInputs } from "../customs"
import ExamFindingsTable from "./ExamFindingsTable"
import { Button } from "../ui/button"

type StepProps = {
    form: UseFormReturn<any>
    vitalFields: UseFieldArrayReturn<any, "vitals", "id">
    examFields: UseFieldArrayReturn<any, "systemicExams", "id">
}

const ClinicalExam: React.FC<StepProps> = ({ form, vitalFields, examFields }) => {
    const { fields, append } = vitalFields
    const { control } = form

    const vitalFieldNames = useMemo(() => ["temp", "pulse", "sats", "bp", "respRate"], [])

    const handleAppendVital = () => {
        append({ temp: "", pulse: "", sats: "", bp: "", respRate: "" })
    }

    return (
        <div className="space-y-8">
            <h2 className="bg-teal-200 p-1 text-center text-xl font-bold text-black">Clinical Findings</h2>
            <CustomDatePicker name="examDate" control={control} label="Date of Examination (IPD)" />

            <div className="rounded-md border border-gray-300 p-2">
                <CustomTableInputs
                    title="Vital Signs (no units, just figures)"
                    fieldNames={vitalFieldNames}
                    form={form}
                    arrayName="vitals"
                    fieldArray={vitalFields}
                />
                <div className="flex items-center justify-center">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={handleAppendVital}
                        disabled={fields.length >= 3}
                        aria-label="Add new vital sign entry"
                    >
                        Add field
                    </Button>
                </div>
            </div>

            <ExamFindingsTable form={form} examFields={examFields} />
        </div>
    )
}

export default React.memo(ClinicalExam)
