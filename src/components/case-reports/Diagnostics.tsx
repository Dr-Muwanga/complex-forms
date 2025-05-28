import type { UseFormReturn, UseFieldArrayReturn } from "react-hook-form"
import { CustomFormField, CustomTableTextAreas } from "../customs"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Textarea } from "../ui/textarea"
import React, { useState, useMemo } from "react"
import { Button } from "../ui/button"

type StepProps = {
    form: UseFormReturn<any>
    diagnosticFields: UseFieldArrayReturn<any, "diagnostics", "id">
    isUploading: boolean
    setIsUploading: React.Dispatch<React.SetStateAction<boolean>>
}

const Diagnostics: React.FC<StepProps> = ({ form, diagnosticFields, isUploading, setIsUploading }) => {
    const { fields, append } = diagnosticFields
    const { control, watch } = form
    const [showImageUploader, setShowImageUploader] = useState(false)

    const diagnosticFieldNames = useMemo(() => ["name", "findings"], [])

    const handleAppendDiagnostic = () => {
        append({ name: "", findings: "" })
    }

    return (
        <div className="space-y-8">
            <p className="bg-teal-200 p-1 text-center text-xl font-bold text-black">
                Diagnostic Assessments, interventions and outcomes
            </p>

            <div className="rounded-md border border-gray-300 p-2">
                <CustomTableTextAreas
                    title="Diagnostic procedures and laboratory tests"
                    fieldNames={diagnosticFieldNames}
                    form={form}
                    arrayName="diagnostics"
                    fieldArray={diagnosticFields}
                />
                <div className="flex items-center justify-center">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={handleAppendDiagnostic}
                        disabled={fields.length >= 7}
                        aria-label="Add new vital sign entry"
                    >
                        Add field
                    </Button>
                </div>
            </div>

            <FormField
                control={control}
                name="diagnosis"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex items-center justify-between">
                            <FormLabel className="!text-black">Diagnosis and differentials</FormLabel>
                            <h2>{watch("diagnosis")?.length}/500</h2>
                        </div>
                        <FormControl>
                            <Textarea
                                {...field}
                                maxLength={500}
                                placeholder="Diagnosis (including other diagnoses considered), Diagnostic challenges and Prognostic characteristics when applicable"
                                autoComplete="off"
                                className="h-36 rounded-sm"
                            />
                        </FormControl>
                        <FormMessage className="!text-red" />
                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name="interventions"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex items-center justify-between">
                            <FormLabel className="!text-black">Therapeutic interventions</FormLabel>
                            <h2>{watch("interventions")?.length}/5000</h2>
                        </div>
                        <FormControl>
                            <Textarea
                                {...field}
                                maxLength={5000}
                                placeholder="Types of therapeutic intervention (pharmacologic, surgical, preventive), Administration of therapeutic intervention (dosage, strength, duration), Changes in therapeutic interventions with explanations."
                                autoComplete="off"
                                className="h-36 rounded-sm text-black"
                            />
                        </FormControl>
                        <FormMessage className="!text-red" />
                    </FormItem>
                )}
            />

            <CustomFormField
                name="links"
                control={control}
                label="Links/sites associated to case (Separate input with a comma) (optional)"
                placeholder="Enter links associated to this case e.g case reports, research"
                type="text"
            />

            {showImageUploader && (
                <FormField
                    control={control}
                    name="mediaIds"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="!text-black">Add photos to your case(optional)</FormLabel>
                            <FormControl>
                                
                                {/* <FileUploader
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    isUploading={isUploading}
                                    setIsUploading={setIsUploading}
                                /> */}
                            </FormControl>
                            <FormMessage className="!text-red" />
                        </FormItem>
                    )}
                />
            )}

            <Button
                type="button"
                variant="default"
                className="bg-blue-400 hover:bg-blue-500 focus:hover:bg-blue-600"
                onClick={() => setShowImageUploader(!showImageUploader)}
            >
                Attach media
            </Button>
        </div>
    )
}

export default React.memo(Diagnostics)
